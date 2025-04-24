import React from "react";
import "../styles/styleProducts.css"
import carritoCompras from "../images/Vector.png"
import botellaGris from "../images/botellaGris.png"

const Products = () => {
    return ( // Asegúrate de usar return aquí
<>
<div class="color-before-menu">

a
    <div class="menu">

        
    </div>
</div>
<div class="card-container">
    <div class="card">
        <h5>Regular</h5>
            <img
                    className="carritoCompras"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
                    <img
                    className="botellaGris"
                    alt="Copia de ECOFLASKY"
                    src={botellaGris}
                  />
                  <br></br>
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <div className="precio">
                    <p>45$</p>
                  </div>

    </div>
    <div class="card">
        <h3>Título 2</h3>
        <p>Contenido de la tarjeta 2.</p>
    </div>
    <div class="card">
        <h3>Título 3</h3>
        <p>Contenido de la tarjeta 3.</p>
    </div>
    <div class="card">
        <h3>Título 4</h3>
        <p>Contenido de la tarjeta 4.</p>
    </div>
    <div class="card">
        <h3>Título 5</h3>
        <p>Contenido de la tarjeta 5.</p>
    </div>
    <div class="card">
        <h3>Título 6</h3>
        <p>Contenido de la tarjeta 6.</p>
    </div>
</div>
</>
    );
};

export default Products;