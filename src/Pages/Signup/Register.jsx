import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Axiosconfig';
import stylesX from "../../Pages/Signup/signup.module.css"
function Register() {
  const navigate = useNavigate()
  const userNamedom = useRef();
  const firstNamedom= useRef();
  const lastNamedom= useRef();
  const emaildom= useRef();
  const passwordom= useRef();
  

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue=userNamedom.current.value
    const firstnameValue =firstNamedom.current.value
    const lastnameValue=lastNamedom.current.value
    const emailValue=emaildom.current.value
    const passwordValue=passwordom.current.value
    if(
      !usernameValue||
      !firstnameValue||
      !lastnameValue||
      !emailValue||
      !passwordValue
    ){
      alert("Please fill all required information")
    }
  try {
    await axios.post('/users/register',{
      username: usernameValue,
      firstname:firstnameValue,
      lastname:lastnameValue,
      email:emailValue,
      password:passwordValue,
    })
    alert("Registration Succesful. please login")
    navigate('/login')
  } catch (error) {
    alert("something wrong")
    console.log(error.response)
  }
    
  }
  
  return (
    <div className={stylesX.container}>
          <div className={stylesX.loginwrapper}>
            <div className={stylesX.login}>
              <h3>Join the network</h3>
              <li>
              Already have an account? <Link to="/login">Sign in</Link>
              </li>
              <form className={stylesX.loginX} onSubmit={handleSubmit}>
                <input ref={emaildom} type="email" placeholder="Email" />
                <div className={stylesX.opencv}>
                <input  ref={firstNamedom}type="text" placeholder='First Name' />
                <input  ref={lastNamedom}type="text" placeholder='Last name' />
                </div>
                <input ref={userNamedom} type="text" placeholder='Username' />
                <input ref={passwordom} type="password" placeholder="Password" />
                <button type="submit">Register</button>
              
                
              </form>
            </div>
    
            <div className={stylesX.rightsidewrapper}>
              <ul>
                <li><a href="#">About</a></li>
              </ul>
              <h1>Evangadi Networks Q&A</h1>
              <p>
                No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps!
                <br />
                <br />
                Whether you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
              </p>
              <div className={stylesX.creative}>
                <button type="button">HOW IT WORKS</button>
              </div>
            </div>
          </div>
    
        
        </div>
  
  )
}

export default Register;