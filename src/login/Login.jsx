import React, { useContext } from 'react'
import LoginCard from './components/LoginCard'
import Context from '../ContextWrapper'

function Login() {
  const {darkMode} = useContext(Context)
  
  return (
    <div className={`${darkMode?"bg-slate-900":""} flex justify-center items-center h-screen`}>
        <LoginCard />
    </div>
        
  )
}

export default Login