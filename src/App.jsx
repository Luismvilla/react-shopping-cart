import { Product } from './components/Products'
import { useProducts } from './hooks/useProducts'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvicer } from './context/cart'

function App() {
const { products, loading } = useProducts()

  return (
    <div className='page'>
      <CartProvicer>
      <Header />
      <Cart />
        {
          loading
          ? <p className='nop'> Cargando productos...</p>
          : <Product producto = {products} />
        }
      <Footer/>
      </CartProvicer>
    </div>
  )
}

export default App
