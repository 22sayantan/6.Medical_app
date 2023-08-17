import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/navBar/NavBar.jsx'

import { BrowserRouter } from 'react-router-dom';
// import Footer from './components/footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <App />
      {/* <Footer/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
