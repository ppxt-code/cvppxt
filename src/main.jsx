import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { HashRouter } from 'react-router-dom' 
import './css/styles.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom' 
const basename = import.meta.env.PROD ? '/cvppxt/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)*/
