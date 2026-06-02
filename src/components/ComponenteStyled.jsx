//esse componente é um exemplo de como usar o styled-components para criar um componente estilizado

import styled from 'styled-components'

// o styled recebe o nome do elemento HTML que queremos estilizar, nesse caso é um h1 e após ele um template literal com as 
//propriedades CSS que queremos aplicar ao nosso componente

export const ComponenteStyled = styled.h1`
    color: #8f610c;
    font-size: 50px;
    font-family: 'Arial', sans-serif;
    text-decoration-color: #d0a75b;
    text-decoration-line: underline;
`

export function Componente({texto, artigo}) {
    return (
        <div>
            <ComponenteStyled>{texto}</ComponenteStyled>
            <p>{artigo}</p>
        </div>
    )
}