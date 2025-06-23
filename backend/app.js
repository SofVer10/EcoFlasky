import express from "express";
import cors from "cors"
import distributorRoute from "./src/sources/distributor.js"
import movementsRoutes from "./src/sources/movemnts.js"
import shoppingCartRoutes from "./src/sources/shoppingCart.js"
import SupplierRoutes from "./src/sources/SupplierRoutes.js"
import CategoryRoutes from "./src/sources/CategoryRoutes.js"
import desingRouter from "./src/sources/desingRouter.js"
import clientsRoutes from "./src/sources/clients.js"
import RatingRoutes from "./src/sources/ratings.js"
import ProductsRoutes from "./src/sources/Products.js"
import FavoriteRoute from "./src/sources/favorites.js"
import LoginRoutes from "./src/sources/loginRoute.js"
import cookieParse from "cookie-parser"
import logoutRoutes from "./src/sources/logoutRoutes.js"
import registerClientRoute from "./src/sources/registerClientRoute.js"
import registerEmployeeRoute from "./src/sources/registerEmployeeRoutes.js"
import speciality from "./src/sources/speciality.js";
import employeeRoute from "./src/sources/employee.js"
import authStatusRoute from "./src/sources/authStatus.js" // Nueva ruta
import passwordRecoveryRoute from "./src/sources/passwordRecovery.js";
import { validateAuthToken } from "./src/middleware/ValidateAuthToken.js";
import paymentRoutes from "./src/sources/paymentRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParse())

// ✅ CORS CORREGIDO
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
  })
);
app.use("/api/payment", paymentRoutes);
app.use("/api/clients", clientsRoutes)
app.use("/api/ratings", RatingRoutes)
app.use("/api/products", ProductsRoutes)
app.use("/api/favorites", FavoriteRoute)
app.use("/api/distributors", distributorRoute);
app.use("/api/movements", movementsRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/supplier", SupplierRoutes)
app.use("/api/category", CategoryRoutes)
app.use("/api/desings", validateAuthToken(["Employee", "Admin"]), desingRouter)
app.use("/api/login", LoginRoutes)
app.use("/api/logout", logoutRoutes)
app.use("/api/registerClient", registerClientRoute)
app.use("/api/registerEmployee", registerEmployeeRoute)
app.use("/api/speciality", speciality)
app.use("/api/employee", employeeRoute)
app.use("/api/auth", authStatusRoute) // Nueva ruta para verificar autenticación
app.use("/api/passwordRecovery", passwordRecoveryRoute);

export default app;    
//Aaron