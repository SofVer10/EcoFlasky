import React from "react";
import "../styles/styleEconomico.css";
import CarritoCompras from "../images/Vector.png";
import Transparente from "../images/transparente.png";
import Favorito from "../images/favorito.png";
import Primera from "../images/primera.png";
import Segunda from "../images/segunda.png";
import Tercera from "../images/tercera.png";
import Cuarta from "../images/cuarto.png";
import Quinta from "../images/quinta.png";
import VidrioBambu from "../images/vidrioBambu.png";
import SoloBambu from "../images/soloBambu.png";
import Hule from "../images/hule.png";
import Celeste from "../images/celeste.png";
import Varias from "../images/varias.png";
import { Link } from 'react-router-dom';

import ProductCard from "../components/cardProducts"; // Asegúrate de que la ruta sea correcta

const Economico = () => {
  const products = [
    { type: "Ecónomico", title: "Botella de bambú y vidrio 350 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Varias }, price: 15,  classProduct:"economico", content: "Botella de bambú y vidrio de diferentes colores, incluye agarradera de cuerda vertical." },
    { type: "Ecónomico", title: "Termo de vidrio y plástico 350ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Transparente }, price: 20, classProduct: "economico", content: "Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing. Lorem ipsum dolor sit amet consectetur. " },
    { type: "Ecónomico", title: "Termo de vidrio con bambú 350ml", image: { favorito: Favorito, carrito: CarritoCompras, src: VidrioBambu }, price: 15, classProduct: "economico", content: "Contenido de la tarjeta 3." },
    { type: "Ecónomico", title: "Botella de bambú y acero 450 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: SoloBambu }, price: 25, classProduct: "economico", content: "Contenido de la tarjeta 4." },
    { type: "Ecónomico", title: "Termo de hule/acero 500 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Hule }, price: 25, classProduct: "economico", content: "Contenido de la tarjeta 5." },
    { type: "Ecónomicoh", title: "Termo celeste con negro 450 ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Celeste }, price: 25, classProduct: "economico", content: "Contenido de la tarjeta 6." },
];

    return (
        <>
            <section className="parteCeleste-economico">
                </section>
                <div className="menu-economico">
                    <div className="parteMenu-economico">
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

                    <div className="explora-economico">
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

export default Economico;