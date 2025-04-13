import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Sidebars'
import Home from './home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>  
    <div className='flex'>
      <Sidebar />
      <Home />
    </div>   
    </>
  )
}

export default App
