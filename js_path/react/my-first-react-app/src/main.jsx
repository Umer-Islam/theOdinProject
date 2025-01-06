import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Greeting from './components/Greeting/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import Footer, { FooterLinks } from './components/Footer/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Greeting/>
    <Footer/>
    <FooterLinks/>
  </StrictMode>,
)
