import { useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";




const Logout = () => {
    const { user, handleLogout } = useContext(UserContext);


    useEffect(() => {
        handleLogout();
        window.location.href ="/"; 
    }, []); 

    return null; 
};

export default Logout;
