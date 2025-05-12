import React from "react";
import "../styles/styleProducts.css";
import { Link } from 'react-router-dom';
import CarritoCompras from "../images/Vector.png";
import BotellaGris from "../images/botellaGris.png";
import Favorito from "../images/favorito.png";
import Primera from "../images/primera.png";
import Segunda from "../images/segunda.png";
import Tercera from "../images/tercera.png";
import Cuarta from "../images/cuarto.png";
import Quinta from "../images/quinta.png";
import Amarillo from "../images/amarilla.png";
import Azul from "../images/azul.png";
import Disenada from "../images/disenada.png";
import Varias from "../images/varias.png";
import Bambu from "../images/bambu.png";
import ProductCard from "../components/cardProducts"; // Asegúrate de que la ruta sea correcta

const Products = () => {
  const products = [
    { type: "Regular", title: "Termo basico 750 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: BotellaGris }, price: 45,  classProduct:"regular", content: "Termo basico hecho con acero inóxidable incluye pajilla de 25 cm y agarre horizontal." },
    { type: "Regular", title: "Termo basico 500 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Amarillo }, price: 35, classProduct: "regular", content: "Termo color amarillo hecho con acero inoxidable, incluye pajilla de 25 cm y agarre vertical" },
    { type: "Regular", title: "Termo basico 700 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Azul }, price: 40, classProduct: "regular", content: "Termo color azul hecho con acero inóxidable,  sin pajilla ni agarradera." },
    { type: "Económico", title: "Botella de bambú y vidrio 350 ml ", image: { favorito: Favorito, carrito: CarritoCompras, src: Varias }, price: 35, classProduct: "economico", content: "Botella de bambú y vidrio de diferentes colores, incluye agarradera de cuerda vertical." },
    { type: "Diseñado", title: "Termo diseñado con palmeras ", image: { favorito: Favorito, carrito: CarritoCompras, src: Disenada }, price: 15, classProduct: "disenado", content: "Termo color morado hecho con acero inóxidable diseñado con hojas de palmeras de distintos tonos de morado, diferentes tamaños." },
    { type: "Regular", title: "Termo de bambú 500 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Bambu }, price: 25, classProduct: "regular", content: "Termo de bambú, incluye pajilla de 25 cm, agarre horizontal y tapa anti goteras." },
];

    return (
        <>
                <section className="parteCeleste">
                    </section>
                <div className="menu">
                    <div className="parteMenu">
                        <Link to="/regular">
                            <p>Regular|</p>
                        </Link>
                        <br />
                        <Link to="/economico">
                            <p>Ecónomico|</p>
                        </Link>
                        <br />
                        <Link to="/disenado">
                            <p>Diseñado</p>
                        </Link>
                    </div>
             
                    <div className="explora">
                        <p>Explora nuestro catálogo</p>
                        <img className="circular" alt="Copia de ECOFLASKY" src={Primera} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Segunda} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Tercera} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Cuarta} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Quinta} />
                    </div>
                </div>

            <div className="card-container">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        type={product.type} // Asegúrate de pasar el type
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        content={product.content}
                        classProduct={product.classProduct} // Asegúrate de pasar el content
                    />
                ))}
                <div></div>
                <p className="vermas">Ver más</p>
            </div>
        </>
    );
};

export default Products;