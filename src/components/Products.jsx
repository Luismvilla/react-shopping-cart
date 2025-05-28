import './Product.css'

export function ListOfProducts({product}) {
    return (
        <main>
            <ul className="products">
            {
                product.map(prod => (
                <li className="product" key={prod.id}>
                <h3> {prod.title} </h3>
                <img src={prod.thumbnail} alt={prod.title} />
                <p> <span>Price:</span> {prod.price}$ </p>
                <p> <span>Stock:</span> {prod.stock} </p>
                <button>Añadir al carrito</button>
                </li>
                ))
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