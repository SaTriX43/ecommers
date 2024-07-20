import React from "react";
import '../estilos/Productos.css'
import Bebida from '../imagenes/images.png'

function Productos( { setVerMas } ) {

  function actualizarVerMas() {
    setVerMas(true)
  }

  return(
      <div className="productos__contenedor-producto sombreado">
        <div className="productos__contenedor-imagen">
          <img
            src={Bebida}
            alt="producto"
            className="imagen imagen-producto"
          />
        </div>
        <div className="productos__contenedor-separador"></div>
        <h3 className="productos__contenedor-producto-titulo">Bebidas</h3>
        <button className="productos__contenedor-boton" onClick={actualizarVerMas}>Ver mas</button>
      </div>
  )
}


export default Productos