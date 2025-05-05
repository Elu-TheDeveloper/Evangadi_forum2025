import { useRef } from 'react'
import{Link, useNavigate} from "react-router-dom"
import axios from "../Axiosconfig"
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
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>username:---</span>
          <input ref={userNamedom} type="text" placeholder='username' />
        </div>
        <br/>
        <div>
          <span>First Name :---</span>
          <input  ref={firstNamedom}type="text" placeholder='first Name'/>
        </div>
        <br/>
        <div>
          <span>Last name:---</span>
          <input  ref={lastNamedom}type="text" placeholder='last name' />
        </div>
        <br/>
        <div>
          <span>email:---</span>
          <input ref={emaildom} type="email" placeholder='email' />
        </div>
        <br/>
        <div>
       <span>password:--</span>
       <input ref={passwordom}type="password" placeholder='password' />
        </div>
        <br/>
        <button type="submit">Register</button>
      </form>
      <Link to={'/login'}>Login</Link>
    </section>
  )
}

export default Register;