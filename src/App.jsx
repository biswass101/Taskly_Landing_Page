import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Bar from './components/Bar/Bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Bar/>
    </>
  )
}

export default App
