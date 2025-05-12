// ProductCard.js
import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import "../styles/styleProducts.css"; // Asegúrate de que el CSS esté disponible

const ProductCard = ({ type, image, price, title, content, classProduct }) => {
    return (
        <div className="card">
            <div className={classProduct}>
                <h5>{type}</h5>
            </div>
            <Link to="/favoritos">
                <img className="favorito" alt="Favorito" src={image.favorito} />
            </Link>
            <Link to="/carrito"> 
                <img className="carritoCompras" alt="Carrito de Compras" src={image.carrito} />
            </Link>
            <img className="botellaGris" alt="Botella" src={image.src} />
            <h4>{title}</h4>
            <p>{content}</p>
            <br />
            <br />
            <div className="precio">
                <p>{price}$</p>
            </div>
        </div>
    );
};

export default ProductCard;