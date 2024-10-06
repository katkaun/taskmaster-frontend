import { Register, Login } from "@katkaun/taskmaster-components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Login />
      <Register />
    </div>
  );
};

export default Home;
