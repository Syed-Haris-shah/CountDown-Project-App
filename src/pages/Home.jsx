import { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'

function Home() {
    const [isSignin, setIsSignin] = useState(true)

    const handleToggle = () => {
        setIsSignin(!isSignin);
    }
  return (
    <>
   {isSignin ? <Login></Login> : <Signup></Signup>}
    {isSignin ?  <p className='sign' onClick={()=> handleToggle ()} >Donot have an account? <span>SignUp</span></p> : <p className='sign' onClick={()=> handleToggle () } >Already Have an account? <span>SignIn</span></p> }
  </>
  )
}

export default Home;