import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login.jsx'

function App() {

  const user = false

  return (
    <div className='container'>
      {
        user ? (
        <>
          'LIST'
          'CHAT'
          'DETAIL'
        </>
        ) : (<Login/>)
      }
    </div>
    

  )

}

export default App
