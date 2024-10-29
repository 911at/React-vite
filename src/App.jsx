import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Alert from './component/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';

function App() {
  // const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }



  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      setText('enable light mode')
      showAlert('success', 'dark mode has been enable')
    }
    else {
      setMode('light')
      setText('enable dark mode')
      showAlert('success', 'light mode has been enable')
    }
  }


  return (
    <>
      <Router>
        <Navbar title="This is Logo" mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Contact />} />
            <Route path='/about' element={<About />} />

          </Routes>     

      </Router>
    </>
  )
}

export default App