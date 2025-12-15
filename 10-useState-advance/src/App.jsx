import React, { useState } from 'react'

const App = () => {

  //for object method
  const [num, setNum] = useState({user: 'Amar', age: 25})

  const btnClicked = ()=>{
    // method-01
    // const newNum ={...num};
    // newNum.user = 'Akash'
    // newNum.age = 18
    // setNum(newNum)

    // method-02
    setNum(prev => ({...prev, age: 28}))
  }

  // for array method
  const [numb, setNumb] = useState([10, 20, 30])

  const btnsClicked = ()=> {
    const newNumb = [...numb]
    newNumb.push(100)
    
    setNumb(newNumb)

  }

  const [no, setNo] = useState(10)

  const btnsClickeds = () =>{
    // setNo(no + 1) 
    // setNo(no + 1) setno ko kitne bar bhi likho lakin no 1 time change hoga
    // setNo(no + 1)

    // correct way
    setNo(change => (change +1))
    setNo(change => (change +1))
    setNo(change => (change +1))
  }

  return (
    <div>
      <h2>{num.user}, {num.age}</h2>
      <button onClick={btnClicked}>Click</button>

      {/* for array */}
      <h2>{numb}</h2>
      <button onClick={btnsClicked}>Submit</button>

      {/* number */}
      <h1>{no}</h1>
      <button onClick={btnsClickeds}>Change</button>
    </div>
  )
}

export default App
