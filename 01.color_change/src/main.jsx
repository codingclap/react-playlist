import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BgChange from './Bgchange.jsx'
import './index.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BgChange />
  </StrictMode>,
)
