// Example 01 to under stand useeffect on react

// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('use effect are running....');
    
//   }, [num])

//   return (
//     <div>
//       <h1>value of num is {num}</h1>
//       <h1>value of num2 is {num2}</h1>
//       <button onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10)
//       }}>Hover me</button>
//     </div>
//   )
// }

// export default App
// App



// Example 02 to understand useeffect in react

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function alphaChange(){
    console.log("Change value of alpha");
    
  }
  function betaChange(){
    console.log("Change value of Beta");
    
  }

  useEffect(function(){
    alphaChange()
  }, [a])
  useEffect(function(){
    betaChange()
    // console.log('use effect are running...');
    
  }, [b])

  return (
    <div>
      <h1>Alpha is {a}</h1>
      <h1>Beta is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change Alpha</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change Beta</button>
    </div>
  )
}

export default App
