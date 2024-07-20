import React from "react";
import Copas from '../imagenes/copas.jpg'
import '../estilos/ProductosDestacados.css'

function ProductosDestacados() {
  return(
    <section className="productos-destacados__seccion">
      <div className="productos-destacados__contenedor-botones">
        <button className="productos-destacados-boton"></button>
        <button className="productos-destacados-boton"></button>
        <button className="productos-destacados-boton"></button>
        <button className="productos-destacados-boton"></button>
      </div>
      <img
        src={Copas}
        className="imagen"
        alt="Producto"
      />
    </section>
  )
}

export default ProductosDestacados