import { useState } from "react";
import { Button, FormControl, FormGroup,Input,InputLabel, Typography  } from "@mui/material";
import { styled } from "@mui/system";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`;
const defaultValue = {
  name: "",
  username: "",
  password: "",
  email: "",
  phone: "",
}
const News = () => {
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
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
        <Button variant="contained" >Add user</Button>
      </FormControl>
    </Container>
  );
}
export default News