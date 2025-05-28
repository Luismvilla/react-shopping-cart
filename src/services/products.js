const API_URL = 'https://dummyjson.com/products'

export const listaProductos = async() => {
    try {
        const response = await fetch(API_URL)
        const json = await response.json()
        const products = json.products

        return products.map(product =>({
            id: product.id,
            title: product.title,
            price: product.price,
            stock: product.stock,
            thumbnail: product.thumbnail,
            category: product.category
        }))
    }catch (e) {
        throw new Error(`error searching: ${e.message}` )
    }
}