import { Navbar, Logo, ReminderIcon, UserIcon, CalendarIcon} from "@katkaun/taskmaster-components";

function App() {
  return (
    <>
      <Navbar icons={[ReminderIcon, CalendarIcon, UserIcon]} logo={<Logo />}/>
    </>
  );
}

export default App;
