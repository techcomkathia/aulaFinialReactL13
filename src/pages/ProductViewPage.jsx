//use params para captar o id do produto e exibir os detalhes do produto selecionado
import { useParams } from 'react-router-dom';
export default function ProductViewPage() {

    const {id} = useParams();

    return(
        <>
            <h1>ProductViewPage</h1>
            <p>Produto selecionado: {id}</p>
        </>
    )
}