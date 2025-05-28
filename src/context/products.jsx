import { createContext, useState, useEffect } from "react";
import { listaProductos } from "../services/products";
//crear el contexto
export const ProductsContext = createContext()
// crear el provider, para proveer el contexto
export function ProductsProvider ({ children }) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
                try {
                    setLoading(true)
                    const newProducts = await listaProductos()
                    setProducts(newProducts)
                } catch (e) {
                    setError(e.message)
                } finally {
                    setLoading(false)
                }
        }
        getProducts()
    },[])

    return(
        <ProductsContext.Provider value={{
            products,
            setProducts,
            error,
            loading
        }}>
            { children }
        </ProductsContext.Provider>    
    )
}
