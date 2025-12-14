import React from 'react'

const App = () => {
  function inputChanging(val){
    console.log(val);
    
  }
  const pageScrolling = (elem)=>{
    console.log('page scrolling............, at speed',elem);
  }
  return (
    <div onWheel={(elem) =>{
      // console.log(elem.deltaY);
      
      pageScrolling(elem.deltaY)
    }}>
      {/* <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter name'/> */}


      {/* <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientY);
        
      }}>
      </div> */}
      <div className="page-01">
        Page 01
      </div>
      <div className="page-02">
        Page 02
      </div>
      <div className="page-03">
        Page 03
      </div>
    </div>
  )
}

export default App
