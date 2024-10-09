import { Route, Routes } from "react-router-dom";
import { ProfileSettings } from "@katkaun/taskmaster-components";
import Calendar from "./components/Calendar";
import Reminders from "./components/Reminders";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userprofile" element={<UserProfile />}/>
      <Route path="/profilesettings" element={<ProfileSettings />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminders" element={<Reminders />} />
    </Routes>
  );
};

export default Switch;
