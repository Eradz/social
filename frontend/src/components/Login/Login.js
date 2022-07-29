import React, {useState, useEffect} from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../redux/authSlice';
import { Loading } from '../loading/loading';


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [text, setText] = useState(false)


const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

useEffect(() => {
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/home')
  }

  dispatch(reset())

},[message, user, isSuccess, isError, navigate, dispatch])


  const change = () => {
    setText(!text)
  }
 
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const onPassword = (e) => {
    setPassword(e.target.value)
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()

      const userData = {
        email,
        password
      }
      dispatch(login(userData))
  }

  if(isLoading){
    return <Loading/>
  }
  
  return (
    
        <div className='login-container'>
              <div className='login-box'>
                  <h1>Login Form</h1>
                  <div className='button-box'>
                      <Link className='link' to="/">
                                <button className='primary-btn'>
                                  Login
                                </button>
                      </Link >
                      <Link className='link' to="/signup">
                                <button className='secondary-btn'>
                                  Signup
                                </button>
                      </Link>
                  </div>
                  <form onSubmit={handleSubmit} className='login-inputs'>
                    <input 
                    type="email" name="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange= {onEmailChange}
                    ></input>
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
                    <a href='#home'>Forgot password?</a>
                  <button  
                  type= 'submit'
                  className='primary-btn'>
                  Login
                  </button>
                  <p>Not a member?  <Link to="/signup">Signup</Link></p>
                  </form>

              </div>
        </div>
  
  )
}
