import { Register, Login } from "@katkaun/taskmaster-components";
import styles from "../styles/Home.module.css";

const handleLogin = (username, password) => {
  console.log("Login attempted with:", username, password);
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Login onLogin={handleLogin} /> 
      <Register />
    </div>
  );
};

export default Home;
