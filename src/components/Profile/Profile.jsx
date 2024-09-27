import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.navbarPlaceholder}>Navbar placeholder</div>  */}
      <div className={styles.profileContainer}>
        <h2>Profile</h2>
        <div className={styles.profilepicture}>Profilbild </div>
        <div className={styles.username}>Användarnamn </div>
        <div className={styles.mail}>Epost </div>
        <div className={styles.phoneNumber}>Telefonnummer </div>
      </div>
      <div className={styles.footerPlaceholder}>Footer </div> 
    </div>
  );
};

export default Profile;