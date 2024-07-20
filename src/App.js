import './App.css';
import Categorias from './componentes/Categorias';
import Encabezado from './componentes/Encabezado';
import ProductosDestacados from './componentes/ProductosDestacados';
import Productos from './componentes/Productos.js';
import { useEffect, useState } from 'react';
import VerMasProductos from './componentes/VerMasProductos.js';
import Bebidas from './imagenes/images.png'

function App() {

  const [verMas , setVerMas] = useState(false)

  const [informacionProducto , setInformacionProducto] = useState([
    {nombre:null , imagen:null , precio:null , descripcion:null}
  ])


  return (
    <div className="App">
      <Encabezado/>
      <ProductosDestacados/>
      <section className='seccion__principal-productos'>
        <div className='productos__contenedor-placeholder'>
          <Categorias/>
        </div>
        <div className="productos__seccion">
          <Productos
            setVerMas={setVerMas}
          />
        </div>
      </section>

      <section className={`ver-mas__seccion ${verMas ? 'ver-mas__seccion-visible' : ''}`}>
        <VerMasProductos
          imagen={Bebidas}
          nombre='Bebidas'
          descripcion='Las bebidas son muy azucaras y pueden causar diabete tipo dos no las consumas porfavor'
          precio='1,20$'
          setVerMas={setVerMas}
        />
      </section>
    </div>
  );
}

export default App;
