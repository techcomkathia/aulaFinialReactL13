import { useState } from 'react'
import './App.css'
import ComponenteNormal from './components/ComponenteNormal'
import { Componente, ComponenteStyled } from './components/ComponenteStyled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <h2 className='classeComum'>Texto com a Classe Comum</h2>
        <h1>Projeto aula final</h1>
        <ComponenteNormal />
        <Componente texto='Texto do Componente' artigo='Artigo do Componente'/>

        <ComponenteStyled>Texto do Componente Styled</ComponenteStyled>
       
    </>
  )
}

export default App
