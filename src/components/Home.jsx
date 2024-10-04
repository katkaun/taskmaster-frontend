import { Register } from "@katkaun/taskmaster-components";
import styles from "../styles/Navbar.module.cs"

const Home = () => {
  return (
    <Register
      className={styles.registerContainer}
      buttonClassName={styles.customButton}
    />
  );
};

export default Home;
