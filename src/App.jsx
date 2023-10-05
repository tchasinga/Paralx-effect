import { useState } from 'react'
import './index.css'
import PagesManager from './Components/Pages'
import SlideShow from './Components/SlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PagesManager />
     <SlideShow />
    </>
  )
}

export default App
