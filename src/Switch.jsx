import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Calendar from "./components/Calendar";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={
          <div>
            <h1>Välkommen till vår app!</h1>
            <p>Detta är bara tillfälligt tills komponenter för startsidan är klar</p>
          </div>
        }
      />{" "}
      <Route path="/profile" element={<Profile />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
};

export default Switch;
