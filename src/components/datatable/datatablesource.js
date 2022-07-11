import { selectAllUsers } from "../../features/users/usersSlice";
import { useSelector } from "react-redux";

// My table's columns;
export function useColumns() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImage">
            <img className="avatarImg" src={params.row.avatar} alt="avatar" />
            {`${params.row.firstName} ${params.row.lastName}`}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "firstName", headerName: "First Name", width: 100 },
    { field: "lastName", headerName: "Last Name", width: 100 },
    { field: "username", headerName: "Username", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <span
            className={`status ${params.row.status === "Active" ? "Active" : "Inactive"}`}
          >
            {params.row.status}
          </span>
        );
      },
    },
  ];

  return columns;
}

// My table's rows
export function useRows() {
  const users = useSelector(selectAllUsers);
  let userStatus;

  const rows = users.map((user, i) => {
    if (i % 2 !== 0) {
      userStatus = "Active";
    } else {
      userStatus = "Inactive";
    }

    let newData = {};

    newData = {
      id: user.id,
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1],
      email: user.email,
      avatar: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
      username: user.username,
      status: userStatus,
    };

    return newData;
  });

  return rows;
}
