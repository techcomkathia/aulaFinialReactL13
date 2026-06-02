import './ComponenteNormal.css'

export default function ComponenteNormal() {

    const estilo = {
        color: 'blue',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
    }

    return (
        <div style={estilo}>
            <h2 >Componente Normal</h2>
            <p className='classeComum'>Este é um componente normal, sem memoização.</p>
        </div>
    )


}