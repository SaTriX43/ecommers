import React, { useState } from "react";
import '../estilos/Categorias.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Categorias({setCategoriasSeleccionada}) {


  function detectarCategoria(e) {
    const categoria = e.target.getAttribute('data-category')
    setCategoriasSeleccionada(categoria)
  }

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
        <button className="categorias-botones sombreado categorias-boton-marcado" data-category="all" onClick={detectarCategoria}>todo</button>
        <button className="categorias-botones sombreado" data-category="electronics"  onClick={detectarCategoria}>Electronica</button>
        <button className="categorias-botones sombreado" data-category="jewelery"  onClick={detectarCategoria}>Joyas</button>
        <button className="categorias-botones sombreado" data-category="men's clothing"  onClick={detectarCategoria}>Ropa hombre</button>
        <button className="categorias-botones sombreado" data-category="women's clothing"  onClick={detectarCategoria}>Ropa mujer</button>
      </div>
    </section>
  )
}

export default Categorias