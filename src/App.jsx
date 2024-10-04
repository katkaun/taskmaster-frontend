import {
  Navbar,
  Logo,
  ReminderIcon,
  UserIcon,
  CalendarIcon,
  Footer,
} from "@katkaun/taskmaster-components";
import "./styles/variables.css";
import styles from "./styles/Navbar.module.css";
import Switch from "./Switch";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar
        className={styles.navbar}
        icons={[
          () => (
            <NavLink to="reminders">
              <ReminderIcon />
            </NavLink>
          ),
          () => (
            <NavLink to="/calendar">
              <CalendarIcon />
            </NavLink>
          ),
          () => (
            <NavLink to="/profile">
              <UserIcon />
            </NavLink>
          ),
        ]}
        logo={<Logo />}
      />
      <Home />
      <Footer />
      <Switch />
    </>
  );
}

export default App;
