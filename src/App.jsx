import {
  Navbar,
  Logo,
  ReminderIcon,
  UserIcon,
  CalendarIcon,
  Footer,
  Register,
  Profile,
  ProfileSettings
} from "@katkaun/taskmaster-components";
import "./styles/variables.css";
import styles from "./styles/Navbar.module.css";
import Switch from "./Switch";
import { NavLink } from "react-router-dom";

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
      <Switch />

      <Register className={styles.registerContainer} buttonClassName={styles.customButton} />
      <Footer />
    </>
  );
}

export default App;
