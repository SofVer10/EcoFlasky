import express from "express";
import Ratings from "../models/Ratings.js"; // Ajusta la ruta según tu estructura
import { validateAuthToken } from "../middleware/validateAuthToken.js";

const router = express.Router();

// Obtener todas las reseñas de un producto específico
router.get("/product/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        
        const ratings = await Ratings.find({ productId })
            .populate('userId', 'name email') // Obtener información del usuario
            .populate('productId', 'title') // Obtener información del producto
            .sort({ createdAt: -1 }); // Ordenar por fecha, más recientes primero
        
        res.status(200).json(ratings);
    } catch (error) {
        console.error('Error fetching product ratings:', error);
        res.status(500).json({ 
            message: "Error al obtener las reseñas del producto",
            error: error.message 
        });
    }
});

// Crear una nueva reseña (requiere autenticación)
router.post("/", validateAuthToken(["Clients"]), async (req, res) => {
    try {
        const { rating, comment, productId } = req.body;
        const userId = req.user.id;

        // Validaciones
        if (!rating || !comment || !productId) {
            return res.status(400).json({ 
                message: "Todos los campos son requeridos" 
            });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ 
                message: "La calificación debe estar entre 1 y 5" 
            });
        }

        if (comment.length < 10 || comment.length > 200) {
            return res.status(400).json({ 
                message: "El comentario debe tener entre 10 y 200 caracteres" 
            });
        }

        // Verificar si el usuario ya ha calificado este producto
        const existingRating = await Ratings.findOne({ userId, productId });
        if (existingRating) {
            return res.status(400).json({ 
                message: "Ya has calificado este producto" 
            });
        }

        // Crear nueva reseña
        const newRating = new Ratings({
            userId,
            rating,
            comment,
            productId
        });

        const savedRating = await newRating.save();
        
        // Poblar la información del usuario para la respuesta
        const populatedRating = await Ratings.findById(savedRating._id)
            .populate('userId', 'name email')
            .populate('productId', 'title');

        res.status(201).json(populatedRating);
    } catch (error) {
        console.error('Error creating rating:', error);
        res.status(500).json({ 
            message: "Error al crear la reseña",
            error: error.message 
        });
    }
});

// Obtener todas las reseñas de un usuario específico
router.get("/user/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        
        const ratings = await Ratings.find({ userId })
            .populate('productId', 'title image')
            .sort({ createdAt: -1 });
        
        res.status(200).json(ratings);
    } catch (error) {
        console.error('Error fetching user ratings:', error);
        res.status(500).json({ 
            message: "Error al obtener las reseñas del usuario",
            error: error.message 
        });
    }
});

// Actualizar una reseña (solo el usuario que la creó)
router.put("/:ratingId", validateAuthToken(["Client"]), async (req, res) => {
    try {
        const { ratingId } = req.params;
        const { rating, comment } = req.body;
        const userId = req.user.id;

        // Validaciones
        if (rating && (rating < 1 || rating > 5)) {
            return res.status(400).json({ 
                message: "La calificación debe estar entre 1 y 5" 
            });
        }

        if (comment && (comment.length < 10 || comment.length > 200)) {
            return res.status(400).json({ 
                message: "El comentario debe tener entre 10 y 200 caracteres" 
            });
        }

        // Verificar que la reseña existe y pertenece al usuario
        const existingRating = await Ratings.findOne({ _id: ratingId, userId });
        if (!existingRating) {
            return res.status(404).json({ 
                message: "Reseña no encontrada o no tienes permisos para editarla" 
            });
        }

        // Actualizar la reseña
        const updatedRating = await Ratings.findByIdAndUpdate(
            ratingId,
            { 
                ...(rating && { rating }),
                ...(comment && { comment })
            },
            { new: true, runValidators: true }
        ).populate('userId', 'name email')
         .populate('productId', 'title');

        res.status(200).json(updatedRating);
    } catch (error) {
        console.error('Error updating rating:', error);
        res.status(500).json({ 
            message: "Error al actualizar la reseña",
            error: error.message 
        });
    }
});

// Eliminar una reseña (solo el usuario que la creó)
router.delete("/:ratingId", validateAuthToken(["Client"]), async (req, res) => {
    try {
        const { ratingId } = req.params;
        const userId = req.user.id;

        // Verificar que la reseña existe y pertenece al usuario
        const existingRating = await Ratings.findOne({ _id: ratingId, userId });
        if (!existingRating) {
            return res.status(404).json({ 
                message: "Reseña no encontrada o no tienes permisos para eliminarla" 
            });
        }

        await Ratings.findByIdAndDelete(ratingId);

        res.status(200).json({ 
            message: "Reseña eliminada exitosamente" 
        });
    } catch (error) {
        console.error('Error deleting rating:', error);
        res.status(500).json({ 
            message: "Error al eliminar la reseña",
            error: error.message 
        });
    }
});

// Obtener estadísticas de reseñas de un producto
router.get("/stats/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        
        const stats = await Ratings.aggregate([
            { $match: { productId: mongoose.Types.ObjectId(productId) } },
            {
                $group: {
                    _id: null,
                    totalReviews: { $sum: 1 },
                    averageRating: { $avg: "$rating" },
                    ratingDistribution: {
                        $push: "$rating"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalReviews: 1,
                    averageRating: { $round: ["$averageRating", 1] },
                    ratingDistribution: {
                        "5": {
                            $size: {
                                $filter: {
                                    input: "$ratingDistribution",
                                    cond: { $eq: ["$$this", 5] }
                                }
                            }
                        },
                        "4": {
                            $size: {
                                $filter: {
                                    input: "$ratingDistribution",
                                    cond: { $eq: ["$$this", 4] }
                                }
                            }
                        },
                        "3": {
                            $size: {
                                $filter: {
                                    input: "$ratingDistribution",
                                    cond: { $eq: ["$$this", 3] }
                                }
                            }
                        },
                        "2": {
                            $size: {
                                $filter: {
                                    input: "$ratingDistribution",
                                    cond: { $eq: ["$$this", 2] }
                                }
                            }
                        },
                        "1": {
                            $size: {
                                $filter: {
                                    input: "$ratingDistribution",
                                    cond: { $eq: ["$$this", 1] }
                                }
                            }
                        }
                    }
                }
            }
        ]);

        if (stats.length === 0) {
            return res.status(200).json({
                totalReviews: 0,
                averageRating: 0,
                ratingDistribution: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 }
            });
        }

        res.status(200).json(stats[0]);
    } catch (error) {
        console.error('Error fetching rating stats:', error);
        res.status(500).json({ 
            message: "Error al obtener las estadísticas de reseñas",
            error: error.message 
        });
    }
});

export default router;