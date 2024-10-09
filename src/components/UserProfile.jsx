import { Profile } from "@katkaun/taskmaster-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate()

    const handleEditClick = () => {
          console.log("Redigera-knappen klickades!");
        navigate("/profilesettings");
    };
  return (
    <div>
      <Profile onEditClick={handleEditClick} /> 
    </div>
  );
};

export default UserProfile;