import React from "react";
import "../styles/styleProducts.css"
import carritoCompras from "../images/Vector.png"
import botellaGris from "../images/botellaGris.png"

const Products = () => {
    return ( // Asegúrate de usar return aquí
<>

<section className="parteCeleste">
<div class="menu">
<div className="parteMenu">
<p>Regular|</p>
<br></br>
<p>Ecónomico|</p>
<br></br>
<p>Diseñado</p>
</div>

<div className="explora">
<p>Explora nuestro catálogo</p>
<img
                    className="circular"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
                  <img
                    className="circular"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
                  <img
                    className="circular"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
                     <img
                    className="circular"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
                       <img
                    className="circular"
                    alt="Copia de ECOFLASKY"
                    src={carritoCompras}
                  />
</div>
    </div>

</section>


        



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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
    <div class="card">
        <h5 className="economico">Ecónomico</h5>
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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
    <div class="card">
        <h5 className="disenado">Diseñado</h5>
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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
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
                  <h4>Botella gris</h4>
                  <p>Contenido de la tarjeta 1.</p>
                  <br></br>
                  <br></br>
                  <div className="precio">
                    
                    <p>45$</p>
                  </div>

    </div>
    <div></div>
 
    <p className="vermas">Ver más</p>
</div>
</>
    );
};

export default Products;