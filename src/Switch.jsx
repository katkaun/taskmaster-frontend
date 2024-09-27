import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Calendar from "./components/Calendar";
import Reminders from "./components/Reminders";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={
          <div>
            <h1>Welcome to TaskMaster AI</h1>
            <p>This is temporary for the home component</p>
          </div>
        }
      />{" "}
      <Route path="/profile" element={<Profile />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminders" element={<Reminders />} />
    </Routes>
  );
};

export default Switch;
