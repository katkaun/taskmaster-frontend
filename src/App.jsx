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

function App() {
  return (
    <>
      <h1>Hello World again</h1>
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
            <NavLink to="/userprofile">
              <UserIcon />
            </NavLink>
          ),
        ]}
        logo={
          <NavLink to="/calendar">
            <Logo />
          </NavLink>
        }
      />
      <Switch />
      <Footer />
    </>
  );
}

export default App;
