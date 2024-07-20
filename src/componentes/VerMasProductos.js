import React from "react";
import '../estilos/VerMasProductos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function VerMasProductos({imagen , nombre , descripcion , precio , setVerMas}) {

  function actualizarVerMas() {
    setVerMas(false)
  }

  return(
    <div className="ver-mas__contenedor-principal">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="ver-mas-icono-regresar"
        onClick={actualizarVerMas}
      />
      <div className="ver-mas__contenedor-imagen">
        <img
          src={imagen}
          alt=""
          className="imagen ver-mas__imagen"
        />
      </div>
      <div className="ver-mas__contenedor-contenido">
        <h2 className="ver-mas__nombre">{nombre}</h2>
        <p className="ver-mas__descripcion">{descripcion}</p>
        <p className="ver-mas__precio">{precio}</p>
        <div className="ver-mas__contenedor-botones">
          <button className="ver-mas__botones boton-comprar sombreado">Comprar</button>
          <button className="ver-mas__botones agregar-carrito sombreado">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default VerMasProductos