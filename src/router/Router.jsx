import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import { BrowserRouter } from 'react-router-dom';

const Router = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router