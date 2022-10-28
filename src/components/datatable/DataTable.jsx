import { useEffect} from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch} from "react-redux";
import { getAllUsers } from "../../features/users/usersSlice";
import { useUserColumns, usePropertyColumns, useUserRows, usePropertyRows, useRoomColumns, useRoomRows } from "./datatablesource";

const DataTable = ({table}) => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);


  const userColumns = useUserColumns();
  const propertyColumns = usePropertyColumns();
  const roomColumns = useRoomColumns();


  const userRows = useUserRows();
  const propertyRows = usePropertyRows();
  const roomRows = useRoomRows();

  let pathColumn;
  let pathRow;

  function handleTables(typeOfTableColumn, typeOfTableRow){
    pathColumn = typeOfTableColumn;
    pathRow = typeOfTableRow;
    return [pathColumn, pathRow];
  }

  if(table === 'userTable'){
    handleTables(userColumns, userRows);
  }else if(table === 'propertyTable'){
    handleTables(propertyColumns, propertyRows);
  }else if (table === 'roomTable') {
    handleTables(roomColumns, roomRows);
  }
  
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={pathRow}
        columns={pathColumn}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
