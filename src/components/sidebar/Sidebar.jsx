import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BedIcon from '@mui/icons-material/Bed';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../features/authSlice";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { nightTheme, lightTheme, toggleTheme} from '../../features/adminSettings/adminSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleDarkTheme = () => {
    dispatch(nightTheme());
  }

  const handleBrightTheme = () => {
    dispatch(lightTheme())
    }
  

  const handleLogout = () => {
    dispatch(logout());
    
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Booking Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/">
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users">
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products">
          <li>
            <HomeWorkIcon className="icon" />
            <span>Properties</span>
          </li>
          </Link>
          <Link to="/rooms">
          <li>
            <BedIcon className="icon" />
            <span>Rooms</span>
          </li>
          </Link>
          <p className="title">Useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <FaceIcon className="icon" />
            <span>Profile</span>
          </li>

          <a type='button' onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </a>
        </ul>
      </div>

      <div className="bottom">
        <div  onClick={handleBrightTheme} className="colorOption"></div>
        <div  onClick={handleDarkTheme} className="colorOption"></div>
      </div>
      
    </div>
  );
};

export default Sidebar;
