import './App.css';
import Categorias from './componentes/Categorias';
import Encabezado from './componentes/Encabezado';
import ProductosDestacados from './componentes/ProductosDestacados';
import Productos from './componentes/Productos.js';
import { useEffect, useState } from 'react';
import VerMasProductos from './componentes/VerMasProductos.js';

function App() {

  const [verMas , setVerMas] = useState(false)

  const [informacionProducto , setInformacionProducto] = useState([])
  const [categoriaSeleccionada , setCategoriasSeleccionada] = useState('all')
  const [productoSeleccionado , setProductoSeleccionado] = useState(null)

  const [valorBusqueda , setValorBusqueda] = useState('')

  useEffect(()=> {
    async function peticionServidor() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        console.log(json)
        setInformacionProducto(json)
      } catch (error) {
        console.error(error)
      }
    } 

    peticionServidor()
  },[])

  const productosFiltrados = informacionProducto.filter(producto => {
    const coincideCategoria = categoriaSeleccionada === 'all' || producto.category === categoriaSeleccionada.toLowerCase();
    const coincideBusqueda = producto.title.toLowerCase().includes(valorBusqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });
    
  const productoAMostrar = informacionProducto.find(producto => producto.id === productoSeleccionado);


  return (
    <div className="App">
      <Encabezado
        valorBusqueda={valorBusqueda}
        setValorBusqueda={setValorBusqueda}
      />
      <ProductosDestacados/>
      <section className='seccion__principal-productos'>
        <div className='productos__contenedor-placeholder'>
          <Categorias
            setCategoriasSeleccionada={setCategoriasSeleccionada}
          />
        </div>
        <div className="productos__seccion">
          {productosFiltrados.map(producto => (
            <Productos
              key={producto.id}
              id={producto.id}
              setVerMas={setVerMas}
              imagen={producto.image}
              nombre={producto.title}
              setProductoSeleccionado={setProductoSeleccionado}
            />
          ))}
          
        </div>
      </section>

      <section className={`ver-mas__seccion ${verMas ? 'ver-mas__seccion-visible' : ''}`}>
        {productoAMostrar && (
            <VerMasProductos
              imagen={productoAMostrar.image}
              nombre={productoAMostrar.title}
              descripcion={productoAMostrar.description}
              precio={`$${productoAMostrar.price}`}
              setVerMas={setVerMas}
            />
          )}
      </section>
    </div>
  );
}

export default App;
