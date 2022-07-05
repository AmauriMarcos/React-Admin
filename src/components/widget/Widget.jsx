import React from "react";
import "./widget.scss";
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";



const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20; 

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={{color: "#5FC7E4", backgroundColor: "rgba(95, 199, 228, 0.203)"}} />,
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon"  style={{color: "#91BDB0", backgroundColor: "rgba(145, 189, 176, 0.199)"}}/>,
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon"  style={{color: "#68D2C8", backgroundColor: "rgba(104, 210, 200, 0.188)"}}/>,
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"  style={{color: "#AEEADE", backgroundColor: "rgba(174, 234, 222, 0.205)"}}/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney &&  "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlined />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
