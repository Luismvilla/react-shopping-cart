import { useId } from "react";
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from "../hooks/useCart";
import { Product } from "./Products";

export function Cart() {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart, removeToCart, totalPrice } = useCart()
  

  function CartItem ({ thumbnail, title, quantity, addToCart, removeToCart, unitPrice }){
    return (
      <li className="li-cart">
            <img src={thumbnail} alt={title} />
            <div>
              <strong> {title} </strong> - ${unitPrice * quantity}
            </div>
            <footer className="cart-footer">
              <small>
                Qty: {quantity}
              </small>
              <button onClick={addToCart} className="qty-button">+</button>
              <button onClick={removeToCart} className="qty-button"> {quantity > 1 ? '-' : 'X'} </button>
              
            </footer>
          </li> 
    )
  }

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon/>
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="aside-cart">
        <ul className="ul-cart">
          {cart.map(product => (
            <CartItem key={product.id}
            addToCart={() => addToCart(product)}  {...product}
            removeToCart={() => removeToCart(product)}  {...product} />
          ))}
        </ul>
        <p>Total: {totalPrice.toFixed(2) } </p>
        <button onClick={clearCart} style={{width: '50px'}}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}