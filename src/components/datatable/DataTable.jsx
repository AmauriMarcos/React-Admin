import { useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { getUsers } from "../../features/users/usersSlice";
import { useColumns, useRows } from "./datatablesource";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const DataTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 240,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">
            <PermIdentityIcon className="icon"/>
            <p>View</p>
          </div>
          <div className="deleteButton">
            <DeleteOutlineIcon className="icon"/>
            <p>Delete</p>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <DataGrid
        rows={useRows()}
        columns={useColumns().concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
