import React from "react";
import { Profile, ProfileSettings } from "@katkaun/taskmaster-components";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        <h2>Profile</h2>
        <div className={styles.profilepicture}>Profilbild </div>
        <div className={styles.username}>Användarnamn </div>
        <div className={styles.mail}>Epost </div>
        <div className={styles.phoneNumber}>Telefonnummer </div>
      </div>
    </div>
  );
};

export default Profile;
