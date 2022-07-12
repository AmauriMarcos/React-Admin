import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { getUsers } from "../../features/users/usersSlice";
import { useColumns, useRows } from "./datatablesource";


const DataTable = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


/*   const actionColumn = {
   
  }; */


  const rows = useRows();
  const columns = useColumns();


  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns/* .concat(actionColumn) */}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
    /*     onSelectionModelChange={(ids) => {
          const selectedIDs =  new Set(ids);
      
          const selectedRows = rows.filter((row) =>
       
            selectedIDs.has(row.id),
           
          );

          setUserId(selectedRows);
        }} */
      />
    </div>
  );
};

export default DataTable;
