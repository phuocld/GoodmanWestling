// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'; 

//Components
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import AddUser from './Components/addUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path='/' element ={<Dashboard />} />
        <Route path='/users' element ={<Users />} />
        <Route path='/add' element ={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
