import {
  Navbar,
  Logo,
  ReminderIcon,
  UserIcon,
  CalendarIcon,
} from "@katkaun/taskmaster-components";
import './styles/variables.css'
import styles from "./styles/Navbar.module.css"

function App() {
  return (
    <>
      <Navbar className={styles.navbar} icons={[ReminderIcon, CalendarIcon, UserIcon]} logo={<Logo />} />
    </>
  );
}

export default App;
