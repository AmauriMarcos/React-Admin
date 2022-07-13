import React from "react";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./list.scss";
import { Link } from "react-router-dom";

const List = ({ title, url }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Link to={url}>
          <div className="addBtn">
            <AddBoxIcon className="icon" />
            <h1 className="title">{title}</h1>
          </div>
        </Link>
        <DataTable />
      </div>
    </div>
  );
};

export default List;
