import { useState } from 'react'
import './index.css'
import PagesManager from './Components/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PagesManager />
    </>
  )
}

export default App
