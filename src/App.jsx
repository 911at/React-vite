import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [mode , setMode]= useState('light')
  const [text , setText] = useState('dark mode')
   const toggleMode= ()=>{
    if (mode== 'light') {
      setMode('dark')
      setText('light mode')
    }
    else{
      setMode('light')
      setText('dark mode')
    }
   }

  return (
    <>
    <Navbar title="This is logo" mode={mode} text={text} toggleMode= {toggleMode} />
      
    
    </>
  )
}

export default App;
