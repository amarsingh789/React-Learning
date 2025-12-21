import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        // console.log('Theme change', props.theme);
        props.setTheme('light')
       
        
    }
    

  return (
    <div>
    
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar




// data ka flow ye hota hai app -> navbar-> sidebar -> theme ye userprofile -> username
// agr flow ulta nhi hota hai 
// flow karne ka trick hota hai 
// usestate ko call const [theme, setTheme] = useState('dark')
// fir data pass kar do <Navbar theme={theme} setTheme={setTheme}/>
// navbar me props ki help se lo  function changeTheme(){
//         console.log('Theme change', props.theme);
//         props.setTheme('light')
       
        
//     }
//     data ulta pass ho gya