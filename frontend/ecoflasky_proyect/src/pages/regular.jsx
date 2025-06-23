import React from "react";
import "../styles/styleRegular.css";
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
import Metal1 from "../images/metal1.png";
import Metal2 from "../images/metal2.png";
import Mate from "../images/mate.png";
import { Link } from 'react-router-dom';

import ProductCard from "../components/CardProducts"; // Asegúrate de que la ruta sea correcta

const Regular = () => {
  const products = [
      { type: "Regular", title: "Termo basico 750 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: BotellaGris }, price: 45,  classProduct:"regular", content: "Termo basico hecho con acero inóxidable incluye pajilla de 25 cm y agarre horizontal." },
      { type: "Regular", title: "Termo basico 500 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Amarillo }, price: 35, classProduct: "regular", content: "Termo color amarillo hecho con acero inoxidable, incluye pajilla de 25 cm y agarre vertical" },
      { type: "Regular", title: "Termo basico 700 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Azul }, price: 40, classProduct: "regular", content: "Termo color azul hecho con acero inóxidable,  sin pajilla ni agarradera." },
    { type: "Regular", title: "Botella variada", image: { favorito: Favorito, carrito: CarritoCompras, src: Metal1 }, price: 35, classProduct: "regular", content: "Contenido de la tarjeta 4." },
    { type: "Regular", title: "Botella diseñada", image: { favorito: Favorito, carrito: CarritoCompras, src: Metal2 }, price: 30, classProduct: "regular", content: "Contenido de la tarjeta 5." },
    { type: "Regular", title: "Botella de bambú", image: { favorito: Favorito, carrito: CarritoCompras, src: Mate }, price: 30, classProduct: "regular", content: "Contenido de la tarjeta 6." },
];

    return (
        <>
            <section className="parteCeleste-regular">

</section>                
<div className="menu-regular">
                    <div className="parteMenu-regular">
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

                    <div className="explora-regular">
                        <p>Nuestros productos más comprados</p>
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

export default Regular;