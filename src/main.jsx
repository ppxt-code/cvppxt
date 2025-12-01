import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './scss/style.scss'
import './css/styles.css'
import App from './App.jsx'
const basename = import.meta.env.PROD ? '/cvppxt/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
