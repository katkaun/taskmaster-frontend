import { Register } from "@katkaun/taskmaster-components";
import styles from "../styles/Navbar.module.css"

const Home = () => {
  return (
    <Register
      className={styles.registerContainer}
      buttonClassName={styles.customButton}
    />
  );
};

export default Home;
