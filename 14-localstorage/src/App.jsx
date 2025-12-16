import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()

    // localStorage.setItem('user', 'Ash')

    //const user = localStorage.getItem('user')  //isme only key store hota hai
    // localStorage.setItem('age', 20)
    // const age = localStorage.getItem('age')

    // console.log(age, user);
    
    // localStorage.removeItem('age')

    // console.log(user);
    

    // const user = {
    //   name: 'Amar',
    //   age: 20,
    //   city: "Delhi"
    // }

    // // localStorage.setItem('user', user) //ase karne se object store hota hai 
    //   localStorage.setItem('user', JSON.stringify(user)) // JSON.stringify() covert karta hai object se array me 

    const user = JSON.parse(localStorage.getItem('user'))  //conert string to object(phle jo tha)
    console.log(user);
    
  return (
    <div>
      App
    </div>
  )
}

export default App
