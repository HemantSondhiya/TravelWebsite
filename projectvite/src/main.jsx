import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './global.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './Travel/Home.jsx'





createRoot(document.getElementById('root')).render(
    
    <>
    <App />
   
  </>
)
