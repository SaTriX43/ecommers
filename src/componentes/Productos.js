import React from "react";
import '../estilos/Productos.css'

function Productos( { setVerMas , imagen , nombre , setProductoSeleccionado, id } ) {

  function actualizarVerMas() {
    setVerMas(true)
    setProductoSeleccionado(id)
  }

  return(
      <div className="productos__contenedor-producto sombreado">
        <div className="productos__contenedor-imagen">
          <img
            src={imagen}
            alt={`producto ${nombre}`}
            className="imagen imagen-producto"
          />
        </div>
        <div className="productos__contenedor-separador"></div>
        <h3 className="productos__contenedor-producto-titulo">{nombre}</h3>
        <button className="productos__contenedor-boton" onClick={actualizarVerMas}>Ver mas</button>
      </div>
  )
}


export default Productos