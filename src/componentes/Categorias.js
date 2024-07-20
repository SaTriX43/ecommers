import React from "react";
import '../estilos/Categorias.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Categorias() {
  return(
    <section className="categorias__seccion">
      <h2 className="categorias-titulo">Categorias</h2>
      <div className="categorias__contenedor-busqueda sombreado">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="icono-lupa"
        />
        <hr/>
        <input
          type="text"
          placeholder="Buscar"
          className="input categorias-input"
        />
      </div>
      
      <div className="categorias-separador"></div>

      <div className="categorias__contenedor-botones">
        <button className="categorias-botones sombreado categorias-boton-marcado">ALL</button>
        <button className="categorias-botones sombreado">Electronica</button>
        <button className="categorias-botones sombreado">Joyas</button>
        <button className="categorias-botones sombreado">Ropa  hombres</button>
        <button className="categorias-botones sombreado">Ropa mujeres</button>
      </div>
    </section>
  )
}

export default Categorias