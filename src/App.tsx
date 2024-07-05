import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Navigation.tsx'
import BrightFuture from './bright.tsx'
import New from './new.tsx'
import Footer from'./footer.tsx'


function App() {
  

  return (
    <>
      <NavBar/>
      <div className="bright-new-content">
        <BrightFuture/>
        <New/>
      </div>
      <Footer/>

    </>
  )
}

export default App
