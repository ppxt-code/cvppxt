import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' 
import './css/styles.css'
import App from './App.jsx'
const basename = import.meta.env.PROD ? '/cvppxt/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>,
)
