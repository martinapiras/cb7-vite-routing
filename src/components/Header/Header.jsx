import { Logo } from "../../svgs";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
    alert("Successfully logged out");
  };

  return (
    <header className={`${styles.Header} col-12`}>
      <Link to="/">
        <div className={styles.logo}>
          <Logo />
        </div>
      </Link>
      <nav className={styles.navigation}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={`${styles.mobileNav} ${isOpen && styles.open}`}>
          <ul className={styles.mobileNavLinks} onClick={toggleMenu}>
            <Link to="/locations">
              <li className={styles.mobileNavLink}>Locations</li>
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/login" onClick={handleLogOut}>
                  <li className={styles.mobileNavLink}>Log out</li>
                </Link>
                <Link to="/dashboard">
                  <li className={styles.mobileNavLink}>Dashboard</li>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <li className={styles.mobileNavLink}>Login</li>
              </Link>
            )}
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <Link to="/locations">
            <li className={styles.navLink}>Locations</li>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/login" onClick={handleLogOut}>
                <li className={styles.navLink}>Log out</li>
              </Link>
              <Link to="/dashboard">
                <li className={styles.navLink}>Dashboard</li>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <li className={styles.navLink}>Login</li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
