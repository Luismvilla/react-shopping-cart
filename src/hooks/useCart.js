import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

export const useCart = () => {
    const Context = useContext(CartContext)

    if (Context === undefined) {
        throw new Error('no puedes usar este custom hook donde no esta envuelto con un provider')
    }

    return Context
}