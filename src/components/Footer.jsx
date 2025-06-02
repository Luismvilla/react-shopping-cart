import { useCart } from "../hooks/useCart"

export function Footer () {
    const { cart } = useCart()
    return (
        <footer className="footer-dev">
            {
                JSON.stringify(cart,null, 2)
            }
        </footer>
    )
}   