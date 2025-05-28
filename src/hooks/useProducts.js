import { useContext, useMemo, useState } from "react";
import { listaProductos } from "../services/products";
import { useEffect } from "react";
import { FiltersContext } from "../context/filters";

export function useProducts() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)  
    const {filters, setFilters} = useContext(FiltersContext)
    
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
    
    const sortedProduct = useMemo(() => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' || product.category === filters.category)
            )
        })
    }, [filters.category, filters.minPrice, products])
    return {products: sortedProduct, error, loading, setFilters, filters}
}