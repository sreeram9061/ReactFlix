import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import AppcontextWrapper from "./context/Appcontext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
    <AppcontextWrapper>
        <BrowserRouter>
            <App />
        </ BrowserRouter>
    </AppcontextWrapper>

)
