import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './componenets/About'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import Landing from './componenets/Landing'
 
import './index.css'

// Product Data
const userData = [
  {
    product:"Mouse",
    color:"Lime red",
    category:"Electronic",
    price:"$340", 
  },
  {
    product:"Fridge",
    color:"golden-silver",
    category:"Electronic",
    price:"$600", 
  },
  {
    product:"Tyre",
    color:"Orange",
    category:"Super",
    price:"$120", 
  },
  {
    product:"Bold Bulb",
    color:"Black",
    category:"Bulb",
    price:"$440", 
  },
  {
    product:"Laptop",
    color:"Red",
    category:"Laptop",
    price:"$100", 
  }
]

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Landing records={userData}/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
