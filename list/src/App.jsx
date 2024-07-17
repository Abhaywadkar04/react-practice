import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import ListItems from './components/ListItems'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Heading/>
     <ListItems/>
    </>
  )
}

export default App
