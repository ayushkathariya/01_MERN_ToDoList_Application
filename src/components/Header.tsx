import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import { KEY_ACCESS_TOKEN, removeItem } from "../utils/localStorageManager";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeItem(KEY_ACCESS_TOKEN);
    toast.success("Logout succesful", { autoClose: 1000 });
    navigate("/login");
  };
  return (
    <header className="flex items-center justify-between bg-inherit">
      <span className="cursor-pointer">
        <FormatListBulletedIcon />
      </span>
      <span onClick={handleLogout} className="cursor-pointer">
        <LogoutIcon />
      </span>
    </header>
  );
};

export default Header;
