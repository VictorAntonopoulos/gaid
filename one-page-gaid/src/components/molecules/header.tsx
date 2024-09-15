import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header({ title = '' }) : JSX.Element  {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/#hero">
          <img src={logo} alt="GAID Logo" /> {/* Imagem logo */}
        </Link>
        <h1>GAID</h1>
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </nav>
  );
}
