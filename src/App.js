import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Registration/Login/Login';
import Register from './Components/Registration/Register/Register';
import Error from './Components/Shared/Error/Error';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
