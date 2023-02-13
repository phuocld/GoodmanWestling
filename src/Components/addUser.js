import { useState } from "react";
import { Button, FormControl, FormGroup,Input,InputLabel, Typography  } from "@mui/material";
import { styled } from "@mui/system";
import { addUser } from "../service/api";
import {useNavigate} from 'react-router-dom';
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`;
const initialValue = {
  name: "",
  username: "",
  password: "",
  email: "",
  phone: "",
}
const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate(); {/* chuyển hướng */}
  const onValueChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
  }
  const addUserDetails = async () =>{
    await addUser(user);
    navigate('/users');
  }
  return(
    <Container>
      <Typography variant="h4">Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={(e)=> onValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(e)=> onValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input name="password" type="password" onChange={(e)=> onValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" type="email" onChange={(e)=> onValueChange(e)}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" type="tel" onChange={(e)=> onValueChange(e)}/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> addUserDetails()}>Add user</Button>
      </FormControl>
    </Container>
  );
}
export default AddUser