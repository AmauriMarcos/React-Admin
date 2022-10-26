import { useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';
import { getAllProperties } from '../../features/propertiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperty } from '../../features/propertiesSlice';
import { getAllUsers, deleteUser } from '../../features/users/usersSlice';
import { getAllRooms } from '../../features/roomsSlice';
import Moment from 'react-moment';
import 'moment-timezone';

// User columns;
export function useUserColumns() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSingleUser = (data) => {
    navigate(`/users/${data.id}`);
  }

  const handleDelete = (params) => {
    dispatch(deleteUser(params.id)).then(() => {
      dispatch(getAllUsers());
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImage">
            <img className="avatarImg" src={params.row.avatar} alt="avatar" />
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 350 },
    { field: "username", headerName: "Username", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={() => handleSingleUser(params)} className="viewButton">
              <PermIdentityIcon className="icon" />
              <p>View</p>
            </button>
            <div onClick={() => handleDelete(params)} className="deleteButton">
              <DeleteOutlineIcon className="icon" />
              <p>Delete</p>
            </div>
          </div>
        );
      },
    }
  ];

  return columns;
}

//Property columns
export function usePropertyColumns() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingleProperty = (data) => {
    navigate(`/products/${data.id}`);
  }

  const handleDeleteProperty = (data) => {
    dispatch(deleteProperty(data.id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "propertyImg",
      headerName: "PropertyImg",
      width: 100,
      renderCell: (params) => {

        return (
          <div className="cellWithImage">
            <img className="avatarImg" src={params.row.propertyImg} alt="avatar" />
          </div>
        );
      },
    },
    { field: "property", headerName: "Property", width: 350 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "stars", headerName: "Stars", width: 80 },
    { field: "location", headerName: "Location", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={() => handleSingleProperty(params)} className="viewButton">
              <PermIdentityIcon className="icon" />
              <p>View</p>
            </button>
            <button onClick={() => handleDeleteProperty(params)} className="deleteButton">
              <DeleteOutlineIcon className="icon" />
              <p>Delete</p>
            </button>
          </div>
        );
      },
    }
  ];

  return columns;
}

//Rooms columns
export function useRoomColumns() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingleProperty = (data) => {
    navigate(`/rooms/${data.id}`);
  }

  const handleDeleteProperty = (data) => {
    dispatch(deleteProperty(data.id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "room", headerName: "Room", width: 80 },
    { field: "roomType", headerName: "RoomType", width: 150 },
    { field: "maxPeople", headerName: "MaxPeople", width: 130 },
    { field: "includes", headerName: "Includes", width: 200 },
    {
      field: "checkIn", headerName: "CheckIn", width: 120, renderCell: (params) => {
        return (
          <div>
                {params.row.checkIn ? <Moment format="YYYY/MM/DD">{params.row.checkIn}</Moment>
                : '-'}               
          </div>
        );
      },
    },
    {
      field: "checkOut", headerName: "CheckOut", width: 120, renderCell: (params) => {
        return (
          <div>
                {params.row.checkOut ? <Moment format="YYYY/MM/DD">{params.row.checkOut}</Moment>
                : '-'}               
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={() => handleSingleProperty(params)} className="viewButton">
              <PermIdentityIcon className="icon" />
              <p>View</p>
            </button>
            <button onClick={() => handleDeleteProperty(params)} className="deleteButton">
              <DeleteOutlineIcon className="icon" />
              <p>Delete</p>
            </button>
          </div>
        );
      },
    }
  ];

  return columns;
}


// User rows
export function useUserRows() {

  let userStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  const allUsers = useSelector((state) => state.users.users);

  const rows = allUsers?.map((user, i) => {
    if (i % 2 !== 0) {
      userStatus = "Active";
    } else {
      userStatus = "Inactive";
    }

    const newData = {
      id: user.id,
      email: user.email,
      avatar: user.avatar,
      username: user.username,
      status: userStatus,
    };

    return newData;
  });

  return rows;
}

//Property rows
export function usePropertyRows() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch])

  const allProperties = useSelector((state) => state.property.entities);

  const rows = allProperties?.map((property, i) => {

    const newData = {
      id: property.id,
      propertyImg: property.propertyURL,
      property: property.propertyName,
      type: property.propertyType,
      stars: property.stars,
      location: property.location
    };

    return newData;
  });

  return rows;
}

//Rooms rows
export function useRoomRows() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch])

  const allRooms = useSelector((state) => state.room.entities);
  console.log(allRooms)
  const rows = allRooms?.map((room, i) => {
    const newData = {
      id: room.id,
      room: room.room,
      roomType: room.roomType,
      maxPeople: room.maxPeople,
      includes: room.includes,
      checkIn: room.checkIn,
      checkOut: room.checkOut,
      price: room.price
    };
    return newData;
  });

  return rows;
}
