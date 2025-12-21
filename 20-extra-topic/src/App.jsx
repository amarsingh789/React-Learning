import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <div>
      Theme is {theme}

      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
