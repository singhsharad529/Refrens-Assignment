import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Characters } from './components/charactersCards/Characters'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Characters/>
    </>
  )
}

export default App
