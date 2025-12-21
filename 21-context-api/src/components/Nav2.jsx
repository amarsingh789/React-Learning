import React from 'react'
import { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

// with props
// const Nav2 = (props) => {
//   return (
//     <div className='nav2'>
//         <h4>Home</h4>
//         <h4>About</h4>
//         <h4>Serives</h4>
//         <h4>Contact</h4>
//         <h4>{props.theme}</h4>
//     </div>
//   )
// }

// without props
const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  // console.log(theme);
  
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Serives</h4>
        <h4>Contact</h4>
        <h4>{theme}</h4>
    </div>
  )
}

export default Nav2
