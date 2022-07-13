import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../features/adminSettings/adminSlice';

const Featured = () => {
  const isDarkMode = useSelector(selectTheme);
  const percentage = 66;
  return (
    <div className="featured">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVertIcon/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar 
            value={percentage} 
            text={`${percentage}%`} 
            styles={buildStyles({
              pathColor: isDarkMode ? " #e2cda7": "#21B6D0",
              textColor: isDarkMode ? " #e2cda7": "#21B6D0",
              trailColor: isDarkMode ? " #444444": "#e5e5e5",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$450</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
               <KeyboardArrowUpIcon/>
               <div className="resultAmount ">$12.5k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult  positive" >
               <KeyboardArrowUpIcon/>
               <div className="resultAmount">$12.5k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
               <KeyboardArrowDownIcon/>
               <div className="resultAmount">$12.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured