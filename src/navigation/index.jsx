import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";




const Navigation = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/join" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
           
        </>
    )
}


export default Navigation;