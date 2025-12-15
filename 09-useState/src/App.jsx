// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setfirst] = useState(20)
//   const [username, setusername] = useState("Amar")
  
//   function changeNum(){
//     setfirst(25)
//     setusername("Akash")
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> value of user  is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

//use State to create a counter with increase,decrease and jump by 5 functionality

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
  
//   const [num, setNum] = useState(0)

//   function increaseNum(){
//     setNum(num + 1);
//     // console.log("increased")
//   }
//   function decreaseNum(){
//     setNum(num - 1);
//     // console.log("decreased")
//   }
//   function jumpNum(){
//     setNum(num + 5)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>Increase</button>
//       <button onClick={decreaseNum}>Decrease</button>
//       <button onClick={jumpNum}>Jump by 5</button>
//     </div>
//   )
// }

// export default App

// project: Create a counter app with increase,decrease,multiply,divide and reset functionality

import React from 'react'
import { useState } from 'react'



const App = () => {

  const [num, setNum] = useState(0)

  function increaeNum(){
    // console.log("increased")
    setNum(num + 1);
  }
  function decreaeNum(){
    // console.log("decreased")
    setNum(num - 1);
  }
  function multiNum(){
    // console.log("multiply")
    setNum(num * 2);
  }
  function divideNum(){
    // console.log("divde")
    setNum(num/2)
  }
  function ZeroNum(){
    // console.log("Zero")
    setNum(0)
  }

  return (
    <div className="app">
      <h2>Counter App</h2>
      <h3>{num}</h3>
      <div className="btnContainer">
        <button onClick={increaeNum}>+</button>
        <button onClick={decreaeNum}>-</button>
        <button onClick={multiNum}>*</button>
        <button onClick={divideNum}>/</button>
        <button onClick={ZeroNum}>0</button>
      </div>
    </div>
  )
}

export default App
