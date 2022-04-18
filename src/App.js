import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Services from './Components/Home/Services/Services';
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
        <Route path='/home#services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
