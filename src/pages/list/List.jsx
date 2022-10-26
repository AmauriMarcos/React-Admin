import React, {useEffect} from "react";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useSelector } from "react-redux";
import "./list.scss";
import { Link } from "react-router-dom";

const List = ({ title, url, table }) => {
  const users = useSelector((state) => state.users.users);

  useEffect(() => {}, [users]);
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Link to={url} className='btnWrapper'>
          <div className="addBtn">
            <AddBoxIcon className="icon" />
            <h1 className="title">{title}</h1>
          </div>
        </Link>
        <DataTable table={table} />
      </div>
    </div>
  );
};

export default List;
