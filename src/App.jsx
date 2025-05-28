import { Product } from './components/Products'
import { useProducts } from './hooks/useProducts'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
const { products, loading } = useProducts()

  return (
    <div className='page'>
      <Header />
        {
          loading
          ? <p className='nop'> Cargando productos...</p>
          : <Product producto = {products} />
        }
      <Footer/>
    </div>
  )
}

export default App
