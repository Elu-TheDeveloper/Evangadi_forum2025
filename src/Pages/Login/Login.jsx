import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Axiosconfig';
import styles from '../Login/login.module.css';

function Login() {
  const navigate = useNavigate();
  const emaildom = useRef();
  const passwordom = useRef();
  const [successMsg, setSuccessMsg]=useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emaildom.current.value;
    const passwordValue = passwordom.current.value;

    if (!emailValue || !passwordValue) {
   setSuccessMsg('Please fill all required information');
    setTimeout(() => setSuccessMsg(''), 5000);
      return;
    }

    try {
      const { data } = await axios.post('/users/login', {
        email: emailValue,
        password: passwordValue,
      });

      localStorage.setItem('token_id', data.token);
        setSuccessMsg('Successfully Login');
      setTimeout(() => {
        setSuccessMsg('');
        navigate('/');
      }, 2000);

    
      console.log(data);
    } catch (error) {
     setSuccessMsg('Please Enter correct username and password');
      console.log(error.response || error.message);
      setTimeout(() => setSuccessMsg(''), 10000);
    }
  }

  return (
    
      <div className={styles.loginwrapper}>
        <div className={styles.login}>
          <h3>Login to your account</h3>
          <li>
            Don't have an account? <Link to="/register">Create a new account</Link>
          </li>
          <form className={styles.loginX} onSubmit={handleSubmit}>
            <input ref={emaildom} type="email" placeholder="Your email" />
            <input ref={passwordom} type="password" placeholder="Your password" />
            <button type="submit">Login</button>
            <li>
            <Link to="/register">Create Account</Link>
            </li>
             {successMsg && (
        <p style={{ color: successMsg === 'Login Successfully' ? 'green' : 'red', fontWeight: 'bold' }}>
          {successMsg}
        </p>
      )}
          </form>
        </div>

        <div className={styles.rightsidewrapper}>
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
          <div className={styles.creative}>
            <button type="button">HOW IT WORKS</button>
          </div>
        </div>
      </div>
  );
}

export default Login;
