import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../UserContext";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Login/Logout";;




const Navigation = () => {
    return(
        <UserProvider>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/join" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/logout" element={<Logout/>} />
                </Routes>
           
        </UserProvider>
    )
}


export default Navigation;