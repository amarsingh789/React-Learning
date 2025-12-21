import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const ThemeDataContext = createContext();

// with props
// export const ThemeDataContext = createContext()
// const ThemeContext = (props) => {
//   return (
//     <div>
//       {/* {props.children} */}
//       {/* <ThemeDataContext.Provider value='Amar'>
//         {props.children}
//       </ThemeDataContext.Provider> */}

//       <ThemeDataContext.Provider>
//         {props.children}
//       </ThemeDataContext.Provider>
//     </div>
//   )
// }

// without props
const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
      {/* {props.children} */}
      {/* <ThemeDataContext.Provider value='Amar'>
        {props.children}
      </ThemeDataContext.Provider> */}

      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}



export default ThemeContext
