import { useEffect, useState } from "react";
import styles from './Navbar.module.css'; 
import logo from '../assets/logo.png';
import iconLogin from '../assets/iconLogin.png';
import suporteStyles from './Suporte.module.css';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    if (windowWidth > 760) {
      setIsOpen(false);
    }

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <nav className={isOpen ? styles.navbarOpen : styles.navbar}>
      <div className={styles['navbar-logo']}>
          <img className={styles.imgLogo} src={logo} alt="GAID Logo" />
        <h1>GAID</h1>
      </div>
      <button className={styles['hamburger-menu']} onClick={toggleMenu}>
        {
          isOpen ? <MdOutlineClose size={'2rem'} />
          : <FiMenu size={'2rem'} />
        }
      </button>
      <ul className={`${styles['navbar-menu']}`}>
        <li><a href="#hero">HOME</a></li>
        <li><a href="#cardiag">CARDIAG</a></li>
        <li><a href="#cdscanner">CD SCANNER</a></li>
        <li><a href="#empresa">EMPRESA</a></li>
        <li><a href="#suporte" className={suporteStyles['suporte-link']}>SUPORTE</a></li>
      </ul>
      <div className={styles['navbar-user']}>
        <Link to="/login">
          <button className={styles['user-button']}>
            <img src={iconLogin} alt="User Icon" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
