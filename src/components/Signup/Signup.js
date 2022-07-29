import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import './Signup.css'
import {Link, useNavigate} from 'react-router-dom';
import { register, reset } from '../redux/authSlice';
import { Loading } from '../loading/loading';


export const Signup = () => {
  const[firstname, setFirstname] = useState('')
  const[lastname, setLastname] = useState('')
  const[email,setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [text, setText] = useState(false)
  const change = () => {
    setText(!text)
  }
  const onFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const onLastname = (e) => {
    setLastname(e.target.value)
  }
  const onEmail = (e) => {
    setEmail(e.target.value)
  }
  const onPassword = (e) => {
    setPassword(e.target.value)
  }

  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isError,isSuccess, message} = useSelector( (state) => state.auth)
useEffect(()=> {
if (isError){
  toast.error(message)
}

if(isSuccess || user ){
  navigate('/home')
}

dispatch(reset())

}, [user, isError, isSuccess, message, navigate, dispatch])


const handleSubmit =(e)=>{
  e.preventDefault()

  const userData = {
    firstname,
    lastname,
    email,
    password
  }
  dispatch(register(userData))

}

if(isLoading) {
  return <Loading />
}


 

  return (
    <div className='sign-main'>
    <div className='signin-container'>
        <div className='signin-box'>
            <h1>Signup Form</h1>
            <div className='button-box'>
                    <Link className='link' to="/">
                        <button className='secondary-btn'>
                        Login
                        </button>
                    </Link>
                    <Link className='link' to="/signup">
                        <button className='primary-btn'>
                          Signup
                        </button>
                    </Link>
                  </div>
            <form onSubmit={handleSubmit} className='signin-inputs' >
                  <input 
                  type="text" name="firstname" 
                  placeholder='firstname' 
                  id='firstname'
                  value={firstname}
                  onChange={onFirstname}
                  required/>
                  <input
                  type="text" name="lastname" 
                  placeholder='lastname'
                  id='lastname' 
                  value={lastname}
                  onChange={onLastname}
                  required/>
                  <input
                  type="email" name="email" 
                  placeholder="email" 
                  id='email'
                  value={email}
                  onChange={onEmail}
                  required/>
                  <div className='password'>
                      <input
                      type={text? "text" : "password"} name="password" 
                      placeholder='password'
                      id='password' 
                      value={password}
                      onChange={onPassword}
                      required/>
                      <span onClick={change}>{text ? <i class="uil uil-eye"></i> : <i class="uil uil-eye-slash"></i> }</span>
                  </div>
                  <button 
                  type="submit"
                  className='primary-btn'>
                  Signup
                  </button>
                  <a href='#home'>Forgot password?</a>
                <p>Already a member? <Link to="/">Login</Link></p>
            </form>

        </div>
</div>
</div>
  )
}