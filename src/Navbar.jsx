import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <img src=".\images\brand_logo.png" alt="brand-logo" />
      <ul className={styles.links}>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className={styles.button}>Login</button>
    </div>
  );
};

export default Navbar;
