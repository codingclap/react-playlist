import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './count.jsx'
import Card from './componenet/Card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />

    <h2 className="text-center text-white text-4xl mt-20">2. React - Props</h2>
    <Card heading="Best Technology of the year 2024" btnText="Visit Here!"/>
    <Card heading="Next js is a best Framework in 2024" btnText="Click Here!"/>

  </StrictMode> 
)
