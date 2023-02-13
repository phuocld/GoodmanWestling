import { TableCell, Table, TableHead, TableRow, TableBody } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";



const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  },[]);
  const getAllUsers = async () => {
    let response =  await getUsers();
    setUsers(response.data);
  }

  return(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {users.map((user) => (
          <TableRow key={user.id}>
              <TableCell>{user._id}</TableCell> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              
          </TableRow>
      ))}
  </TableBody>
    </Table>
  );
}
export default Users