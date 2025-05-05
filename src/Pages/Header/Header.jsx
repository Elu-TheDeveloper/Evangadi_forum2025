import React from 'react';
import styles from '../Login/login.module.css';
import evangadilogo from '../../assets/images/evangadi.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles.cont}>
    <div className={styles.header}>
        <img src={evangadilogo} alt="Evangadi Logo" />
        <div className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">How it Works</a>

          {user ? (
            <button
              onClick={handleLogout}
              className={styles.signin}
              type="button"
            >
              LOGOUT
            </button>
          ) : (
            <Link to="/login">
              <button className={styles.signin} type="button">
                SIGN IN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
    
  
  );
};

export default Header;
