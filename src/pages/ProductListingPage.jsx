import { Link } from "react-router-dom"
export default function ProductListingPage() {

    const products = [
        {id: 1, name: 'Produto 1'},
        {id: 2, name: 'Produto 2'},
        {id: 3, name: 'Produto 3'},
    ]

    return(
        <>
            <h1>ProductListingPage</h1>

            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - <Link to={`/products/${product.id}`}>Detalhes</Link> </li>
                ))}
            </ul>


        </>
    )
}