import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

// with props
// const Navbar = (props) => {
// //    const data =  useContext(ThemeDataContext)
// //    console.log(data);
   
//   return (
//     <div className='nav'>
//       {/* <h2>{data}</h2> */}
//       <h2>Sheriyans</h2>
//       <Nav2 theme={props.theme}/>
//     </div>
//   )
// }


// without props
const Navbar = () => {
//    const data =  useContext(ThemeDataContext)
//    console.log(data);
  const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
      <h2>Sheriyans</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar
