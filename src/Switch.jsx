import { Route, Routes } from "react-router-dom";
import { Profile } from "@katkaun/taskmaster-components";
import { ProfileSettings } from "@katkaun/taskmaster-components";
import Calendar from "./components/Calendar";
import Reminders from "./components/Reminders";
import Home from "./components/Home";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profilesettings" element={<ProfileSettings />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminders" element={<Reminders />} />
    </Routes>
  );
};

export default Switch;
