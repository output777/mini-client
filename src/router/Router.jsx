import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import { BrowserRouter } from 'react-router-dom';
import DetailPage from "../components/Detailcontainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                {/* <Route path='/detail' element={<DetailPage />}></Route> */}
                <Route path='/detail/:id' element={<DetailPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router