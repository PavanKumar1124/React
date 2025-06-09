import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/greet'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Greet/>
<Footer/>
    </>
  )
}

export default App
