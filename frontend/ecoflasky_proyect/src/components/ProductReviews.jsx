import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/styleReviews.css";

const ProductReviews = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    
    const [reviews, setReviews] = useState([]);
    const [product, setProduct] = useState(null);
    const [newReview, setNewReview] = useState({
        rating: 5,
        comment: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    // Verificar si el usuario está logueado
    useEffect(() => {
        checkAuthStatus();
    }, []);

    // Cargar reseñas del producto
    useEffect(() => {
        if (productId) {
            fetchProductReviews();
            fetchProductDetails();
        }
    }, [productId]);

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('/api/auth/status', {
                credentials: 'include'
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        }
    };

    const fetchProductReviews = async () => {
        try {
            const response = await fetch(`/api/ratings/product/${productId}`, {
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Error al cargar las reseñas');
        }
    };

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setProduct(data);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingClick = (rating) => {
        setNewReview(prev => ({
            ...prev,
            rating: rating
        }));
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        
        if (!user) {
            setError('Debes iniciar sesión para dejar una reseña');
            return;
        }

        if (newReview.comment.trim().length < 10) {
            setError('La reseña debe tener al menos 10 caracteres');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newReview,
                    productId: productId
                }),
                credentials: 'include'
            });

            if (response.ok) {
                const savedReview = await response.json();
                setReviews(prev => [savedReview, ...prev]);
                setNewReview({ rating: 5, comment: '' });
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al guardar la reseña');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error de conexión');
        } finally {
            setIsLoading(false);
        }
    };

    const renderStars = (rating, interactive = false, onStarClick = null) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
                    onClick={interactive ? () => onStarClick(i) : undefined}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    const getAverageRating = () => {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <button 
                    className="back-button"
                    onClick={() => navigate(-1)}
                >
                    ← Volver
                </button>
                
                {product && (
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <div className="rating-summary">
                            <div className="average-rating">
                                {renderStars(Math.round(getAverageRating()))}
                                <span className="rating-number">
                                    {getAverageRating()} ({reviews.length} {reviews.length === 1 ? 'reseña' : 'reseñas'})
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="reviews-content">
                {/* Formulario para nueva reseña */}
                <div className="new-review-section">
                    <h2>Escribe tu reseña</h2>
                    {user ? (
                        <form onSubmit={handleSubmitReview} className="review-form">
                            <div className="rating-input">
                                <label>Calificación:</label>
                                <div className="stars-input">
                                    {renderStars(newReview.rating, true, handleRatingClick)}
                                </div>
                            </div>
                            
                            <div className="comment-input">
                                <textarea
                                    name="comment"
                                    value={newReview.comment}
                                    onChange={handleInputChange}
                                    placeholder="Escribe tu reseña aquí... (mínimo 10 caracteres)"
                                    maxLength="200"
                                    rows="4"
                                    required
                                />
                                <div className="character-count">
                                    {newReview.comment.length}/200
                                </div>
                            </div>
                            
                            {error && <p className="error-message">{error}</p>}
                            
                            <button 
                                type="submit" 
                                className="submit-review-btn"
                                disabled={isLoading || newReview.comment.trim().length < 10}
                            >
                                {isLoading ? 'Enviando...' : 'Publicar reseña'}
                            </button>
                        </form>
                    ) : (
                        <div className="login-prompt">
                            <p>Debes <a href="/login">iniciar sesión</a> para dejar una reseña</p>
                        </div>
                    )}
                </div>

                {/* Lista de reseñas */}
                <div className="reviews-list">
                    <h2>Reseñas de clientes</h2>
                    {reviews.length === 0 ? (
                        <div className="no-reviews">
                            <p>Aún no hay reseñas para este producto.</p>
                            <p>¡Sé el primero en dejar una reseña!</p>
                        </div>
                    ) : (
                        reviews.map((review) => (
                            <div key={review._id} className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">
                                            {review.userId?.name?.charAt(0).toUpperCase() || 'U'}
                                        </div>
                                        <div className="reviewer-details">
                                            <h4>{review.userId?.name || 'Usuario anónimo'}</h4>
                                            <div className="review-rating">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-date">
                                        {formatDate(review.createdAt)}
                                    </div>
                                </div>
                                <div className="review-content">
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;