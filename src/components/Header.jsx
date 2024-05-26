import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Header = () => {
    const { user } = useContext(UserContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const userDetails = JSON.parse(localStorage.getItem("userDetails")); 

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const renderMobileMenu = () => {
        return (
            isMobileMenuOpen && (
                <div className="mobile-menu-popup">
                    <div className="mobile-menu-content sm:block md:hidden">           
                        <button className="close-button" onClick={closeMobileMenu}>
                            X
                        </button>
                        <Link to="/" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/about" className="mobile-menu-link text-l" onClick={closeMobileMenu}>About</Link>
                        <Link to="/courses" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Courses</Link>
                        <Link to="/contact" className="mobile-menu-link text-l" onClick={closeMobileMenu}>Contact</Link>
                        {userDetails ? ( 
                            <Box className="cta">
                                <Typography variant="h6" sx={{ fontWeight: "300", fontSize: "16px" }} paragraph className="inline font-light text-l">
                                    {userDetails.fname} &nbsp; {userDetails.lname}
                                </Typography> &emsp; &emsp;
                                <span>
                                    <Link to="/logout">
                                        <PowerSettingsNewIcon
                                            className="inline text-red-600 hover:text-carton"
                                        />
                                    </Link>
                                </span>
                            </Box>
                        ) : (
                            <>
                                <Link to="/login" className="mobile-menu-link" onClick={closeMobileMenu}><Button>Login</Button></Link>  
                            </>  
                        )}  
                    </div>
                </div>
            )
        );
    };

    return(
        <header className="bg-[#42113C] main_header">
            <nav id="header" className="text-white">
                <div className="w-full mx-auto container justify-between mt-0 py-0 md:flex items-center nav-icon justify-between" onClick={toggleMobileMenu}>
                    <div className="md:hidden flex items-center">
                        <svg
                            className="w-12 h-12"
                            fill="currentColor"
                            viewdiv="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="logo">
                        <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                            <img src={logo} alt="logo" className="w-45 h-50 mt-[-15%]" />
                        </Link>
                    </div>
                    <ul
                        className={`nav-menu-wrapper mx-auto flex-col md:flex-row flex md:space-x-8 mt-[-3%]  text-sm`}
                        id="mobile-menu"
                    >
                        <li><Link to="/" className="text-l">Home</Link></li>
                        <li><Link to="/about" className="text-l">About</Link></li>
                        <li><Link to="/courses" className="text-l">Courses</Link></li>
                        <li><Link to="/contact" className="text-l">Contact</Link></li>
                    </ul>
                    <div className="header-extras flex items-center justify-between space-x-6 pr-8 mt-[-5%]">
                        {userDetails ? ( 
                            <Box className="cta">
                                <Typography variant="h6" sx={{ fontWeight: "300", fontSize: "16px" }} paragraph className="inline font-light text-l">
                                    {userDetails.fname} &nbsp; {userDetails.lname}
                                </Typography> &emsp; &emsp;
                                <span>
                                    <Link to="/logout">
                                        <PowerSettingsNewIcon
                                            className="inline text-red-600 hover:text-carton"
                                        />
                                    </Link>
                                </span>
                            </Box>
                        ) : (
                            <>
                                <Link to="/login" className="text-l"><Button>Login</Button></Link>  
                            </>  
                        )}  
                    </div>    
                </div>
            </nav>
            {renderMobileMenu()}
        </header>   
    );
};

export default Header;
