import { useProducts } from "../hooks/useProducts"

export function Footer () {
    const {filters} = useProducts()
    return (
        <footer className="footer">
            {
               JSON.stringify(filters)
            }
        </footer>
    )
}   