import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Button from './components/Button.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>,
)
