import React, { useState } from 'react';
import styles from '../Login/login.module.css';
import evangadilogo from '../../assets/images/evangadi.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false); // Close menu after logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <img src={evangadilogo} alt="Evangadi Logo" />
        
        {/* Hamburger menu icon */}
        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        
        {/* Navigation menu */}
        <div className={`${styles.navContainer} ${isMenuOpen ? styles.showMenu : ''}`}>
          <nav className={styles.nav}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/how-it-works" onClick={closeMenu}>How it Works</Link>
            
            {user ? (
              <button
                onClick={handleLogout}
                className={styles.signin}
                type="button"
              >
                LOGOUT
              </button>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <button className={styles.signin} type="button">
                  SIGN IN
                </button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;