import React from "react";
import "../styles/styleDisenado.css";
import CarritoCompras from "../images/Vector.png";
import Naranja from "../images/naranja.png";
import Favorito from "../images/favorito.png";
import Primera from "../images/primera.png";
import Segunda from "../images/segunda.png";
import Tercera from "../images/tercera.png";
import Cuarta from "../images/cuarto.png";
import Quinta from "../images/quinta.png";
import Maestro from "../images/maestro.png";
import Pintado from "../images/pintado.png";
import Disenada from "../images/disenada.png";
import Flores from "../images/flores.png";
import Brillantina from "../images/brillantina.png";
import { Link } from 'react-router-dom';

import ProductCard from "../components/cardProducts"; // Asegúrate de que la ruta sea correcta

const Regular = () => {
  const products = [
    { type: "Diseñado", title: "Termo diseñado con palmeras ", image: { favorito: Favorito, carrito: CarritoCompras, src: Disenada }, price: 35,  classProduct:"disenado", content: "Contenido de la tarjeta 1." },
    { type: "Diseñado", title: "Botella amarilla", image: { favorito: Favorito, carrito: CarritoCompras, src: Naranja }, price: 45, classProduct: "disenado", content: "Contenido de la tarjeta 2." },
    { type: "Diseñado", title: "Termo pintado 400ml", image: { favorito: Favorito, carrito: CarritoCompras, src: Pintado }, price: 40, classProduct: "disenado", content: "Contenido de la tarjeta 3." },
    { type: "Diseñado", title: "Flores de primavera", image: { favorito: Favorito, carrito: CarritoCompras, src: Flores }, price: 50, classProduct: "disenado", content: "Contenido de la tarjeta 4." },
    { type: "Diseñado", title: "Brillantina negra", image: { favorito: Favorito, carrito: CarritoCompras, src: Brillantina }, price: 40, classProduct: "disenado", content: "Contenido de la tarjeta 5." },
    { type: "Diseñado", title: "Maestra del año", image: { favorito: Favorito, carrito: CarritoCompras, src: Maestro }, price: 50, classProduct: "disenado", content: "Contenido de la tarjeta 6." },
];

    return (
        <>
            <section className="parteCeleste-disenado">
                <div className="menu-disenado">
                    <div className="parteMenu-disenado">
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

                    <div className="explora-disenado">
                        <p>Nuestros productos más comprados</p>
                        <img className="circular" alt="Copia de ECOFLASKY" src={Primera} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Segunda} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Tercera} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Cuarta} />
                        <img className="circular" alt="Copia de ECOFLASKY" src={Quinta} />
                    </div>
                </div>
            </section>

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