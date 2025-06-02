import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvicer ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // verificar si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            // metodo con structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        // si el producto no está en el carrito
        setCart(prevState =>([
            ...prevState,
            {
                ...product,
                quantity: 1,
                unitPrice: product.price
            }
        ]))
    }
    const removeToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        const newCart = structuredClone(cart)

        if (newCart[productInCartIndex].quantity === 1) {
            setCart(prevState => prevState.filter(item => item.id !== product.id))
            return
        } else {
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        }
        
    }
    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const totalPrice = cart.reduce(
        (acc, product) => acc + product.unitPrice * product.quantity,
        0
    )

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            removeToCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}