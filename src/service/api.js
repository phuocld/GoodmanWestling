import axios from 'axios';


const URL = 'http://localhost:8000';
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data)
  } catch (error) {
    console.log('Error while calling add User Api', error);
  }
}
export const getUsers = async () =>{
  try {
    return await axios.get(`${URL}/users`);
  } catch (error) {
    console.log('error not calling API getUsers:',error);
  }
}