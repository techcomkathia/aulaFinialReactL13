import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProvider from './context/AppContex.jsx' // provê todos os contextos para a aplicação

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
     <App />
    </AppProvider>
  </StrictMode>,
)
