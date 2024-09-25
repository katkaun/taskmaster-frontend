import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <h1>Taskmaster AI</h1>
        <span>Your personal organizer</span>
      </div>
      <div className={styles.navbarLinks}>
        <a href="#">Alert</a>
        <a href="#">Calendar</a>
        <a href="#">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
