import React, {useEffect} from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadAllProducts } from "../../features/products/productsSlice";
import { getRoomByHotelID } from "../../features/roomsSlice";
import Moment from 'react-moment';
import 'moment-timezone';


const List = ({propertyId}) => {
  const products = useSelector(loadAllProducts);
  const rooms = useSelector((state) => state.room.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomByHotelID(propertyId));
  }, [dispatch])

  const dates = rooms?.map((room) => {
    const d = new Date(room.checkIn);
    return d
  });

  console.log(dates)
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Max people</TableCell>
            <TableCell className="tableCell">Includes</TableCell>
            <TableCell className="tableCell">Check In</TableCell>
            <TableCell className="tableCell">Check Out</TableCell>
            <TableCell className="tableCell">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.room}</TableCell>
            {/*   <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{row.roomType}</TableCell>
              <TableCell className="tableCell">{row.maxPeople}</TableCell>
              <TableCell className="tableCell">{row.includes}</TableCell>
              <TableCell className="tableCell">
                {row.checkIn ? <Moment format="YYYY/MM/DD">{row.checkIn}</Moment>
                : '-'}               
              </TableCell>
              <TableCell className="tableCell">
                {row.checkOut ? <Moment format="YYYY/MM/DD">{row.checkOut}</Moment>
                : '-'}               
              </TableCell>
              <TableCell className="tableCell">EUR {row.price}</TableCell>
              {/* <TableCell className={`tableCell `}>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
