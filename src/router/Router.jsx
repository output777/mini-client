import LoginPage from "../pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";

const Router = () =>{
    return (
        <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
        </Routes>
    )
}

export default Router