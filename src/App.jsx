import { useState } from 'react'
import './App.css'
import ComponenteNormal from './components/ComponenteNormal'
import { Componente, ComponenteStyled } from './components/ComponenteStyled'
import Layout from './components/Layout'
import { BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <div className='d-none' id='exemplos de aula'>
          <h2 className='classeComum'>Texto com a Classe Comum</h2>
          <h1>Projeto aula final</h1>
          <ComponenteNormal />
          <Componente texto='Texto do Componente' artigo='Artigo do Componente'/>

          <ComponenteStyled>Texto do Componente Styled</ComponenteStyled>
        </div>

        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>


       
    </>
  )
}

export default App
