import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {
  // const [theme, setTheme] = useState('light')

  return (
    <div>
      {/* normal way */}
      {/* <Navbar theme={theme}/> */}
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App
