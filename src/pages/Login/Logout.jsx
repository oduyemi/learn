import React, { useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

const Logout = () => {
    const { handleLogout } = useContext(UserContext);


    useEffect(() => {
        handleLogout();
        window.location.href ="/login"; 
    }, []); 

    return null; 
};

export default Logout;
