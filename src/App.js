import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
// import Services from './Components/Home/Services/Services';
import Login from './Components/Registration/Login/Login';
import Register from './Components/Registration/Register/Register';
import Error from './Components/Shared/Error/Error';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        {/* <Route path='/services' element={<Services/>}></Route> */}
        <Route path='/Blogs' element={<Blogs/>}></Route>';
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/service/:courseId' element={
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        }></Route>
        {/* <Route path='/checkout' element={<Checkout/>}></Route> */}
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
