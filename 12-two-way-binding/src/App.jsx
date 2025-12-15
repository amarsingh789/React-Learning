import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandle = (e) =>{
    e.preventDefault()
    console.log("Form submit by", title);
    
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandle(e)
      }}>
        <input
        type="text"
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          // console.log(e.target.value);
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
