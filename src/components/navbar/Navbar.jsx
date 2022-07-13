import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectTheme, toggleTheme } from '../../features/adminSettings/adminSlice';


const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectTheme)

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }

 
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchOutlinedIcon className="icon"/>
          </div>
          <div className="items">
            <div className="item">
              {isDarkMode && <Brightness5Icon sx={{cursor:'pointer'}} onClick={handleThemeChange} className="icon"/>}
              {!isDarkMode && <DarkModeIcon sx={{cursor:'pointer'}} onClick={handleThemeChange} className="icon"/>}
            </div>
            <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              English
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <img src="https://img.freepik.com/free-photo/photo-dark-skin-guy-look-camera-wear-casual-t-shirt-isolated-yellow-color-background_274222-35760.jpg" alt="avatar" className='avatar'/>             
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar