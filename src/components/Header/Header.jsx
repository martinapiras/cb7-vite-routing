import { Logo } from "../../svgs";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.Header} col-12`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/locations">Locations</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
