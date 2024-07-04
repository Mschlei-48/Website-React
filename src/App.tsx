import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Navigation.tsx'
import BrightFuture from './bright.tsx'
import New from './new.tsx'
import Footer from'./footer.tsx'
// import Content from './content.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className="bright-new-content">
        <BrightFuture className="bright-future"/>
        <New className="new"/>
      </div>

    </>
  )
}

export default App
