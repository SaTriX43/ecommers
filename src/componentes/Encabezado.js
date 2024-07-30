import React from "react";
import '../estilos/Encabezado.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Encabezado({valorBusqueda , setValorBusqueda}) {

  function actualizarValorBusqueda(e) {
    setValorBusqueda(e.target.value)
    console.log(valorBusqueda)
  }

  return(
    <header className="encabezado">
      <h1 className="encabezado__titulo">SaTriX e commers</h1>
      <div className="encabezado__contenedor-busqueda">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="icono-lupa"
        />
        <p className="contenedor-busqueda-texto">Todas las Categorias</p>
        <div className="encabezado__boton-categorias"></div>
        <hr className="encabezado__hr"/>
        <input
          type="text"
          placeholder="Buscar"
          className="input encabezado__input"
          value={valorBusqueda}
          onChange={actualizarValorBusqueda}
        />
      </div>
      <div className="encabezado__apartados">
        <div className="encabezado__apartado catalogo">
          <FontAwesomeIcon
            icon={faBox}
            className="icon-apartado"
          />
          <p className="encabezado__text-icon-apartado">catalogo</p>
        </div>
        <div className="encabezado__apartado mi-cuenta">
          <FontAwesomeIcon
            icon={faUser}
            className="icon-apartado"
          />
          <p className="encabezado__text-icon-apartado">Usuario</p>
        </div>
        <div className="encabezado__apartado carrito">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="icon-apartado"
          />
          <p className="encabezado__text-icon-apartado">Carrito</p>
        </div>
      </div>
      
    </header>
  )
}

export default Encabezado