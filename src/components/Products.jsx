import { useCart } from '../hooks/useCart'
import { AddToCartIcon, CartIcon, RemoveFromCartIcon } from './Icons'
import './Product.css'

export function ListOfProducts({product}) {
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main>
            <ul className="products">
            {
                product.map(prod => {
                    const isProductInCart = checkProductInCart(prod)
                return (
                <li className="product" key={prod.id}>
                <h3> {prod.title} </h3>
                <img src={prod.thumbnail} alt={prod.title} />
                <p> <span>Price:</span> {prod.price}$ </p>
                <p> <span>Stock:</span> {prod.stock} </p>
                <button style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => isProductInCart
                        ? removeFromCart(prod)
                        : addToCart(prod)}>
                    {
                        isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                </button>
                </li>
                )})
            }
        </ul>
        </main>
        
    )
    
}

export function NoListOfProducts () {
    return (
        <p className='nop'>no hay productos disponibles</p>
    )
}

export function Product ({producto}) {
    const hasProduct = producto?.length === 0
    return (
    hasProduct
    ? <NoListOfProducts />
    : <ListOfProducts product = {producto}  />
    )
}