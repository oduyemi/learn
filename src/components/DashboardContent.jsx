import React, { useState, useEffect, useContext} from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "./elements/Button";
import { CoursesPage } from "./CoursesPage";
import defaultAvatar from "../assets/images/photos/avatar.png";



export const DashboardContent = () => {
    const { user, handleLogout } = useContext(UserContext);
    const [flashMessage, setFlashMessage] = useState(null)
    const [userDetails, setUserDetails] = useState({
        userID: "",
        fname: "",
        lname: "",
        username: "",
        email: "",
        phone: "",
        img: ""
    });

    useEffect(() => {
        if (!user) {
            setFlashMessage({
                type: "error",
                message: "You need to login first!",
            });
            window.location.href="/login";
        } else {
            setUserDetails({
                userID: user.userID || "",
                fname: user.fname || "",
                lname: user.lname || "",
                email: user.email || "",
                phone: user.phone || "",
                username: user.username || "",
                img: user.img || defaultAvatar
            });
            }
        }, [user]);

    return (
        <Box className="flex">
            <Box className="flex w-2/5 md:w-1/4 h-screen">
                <Box className="mx-auto py-10">
                <ul>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <Link to="/dashboard"><span className="font-semibold">All Courses</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <Link to="/my-courses"><span className="font-semibold">My Courses</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <Link to="/profile"><span className="font-semibold">Profile</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <Link to="/update-password"><span className="font-semibold">Change Password</span></Link>
                        </li>
                        <Link to="/logout" >
                            <Button>Logout</Button>
                        </Link>
                    </ul>
                </Box>
            </Box>
            <main className="min-h-screen w-full bg-blu">
                <nav className="flex justify-between px-10 bg-white py-6">
                    <Box className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
                        <input type="text" placeholder="Search courses" className="bg-gray-100 outline-none w-full" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Box>
                    <Box className="flex items-center">
                        <img className="w-8 rounded-full" src={userDetails.img || user.img || defaultAvatar} alt="User image" /> &nbsp;
                        <p>{userDetails.fname || user.fname} {userDetails.lname || user.lname}</p>
                    </Box>
                </nav>
                <Box className="w-full">
                    <h1 className="text-2xl text-blu font-semibold">All Courses</h1>
                    <CoursesPage />
                    {/* <Box className="md:flex mt-4 space-x-4 justify-center">
                        <Box className="h-96 bg-gradient-to-r from-indigo-600 to-purple-500 flex items-end rounded-md">
                            <p className="text-lg text-indigo-50">How to do Basic Jumping and how to landing safely</p>
                        </Box>
                        <Box className="h-96 bg-gradient-to-r from-yellow-600 to-red-500 flex items-end rounded-md">
                            <p className="text-lg text-indigo-50">How to do Basic Jumping and how to landing safely</p>
                        </Box>
                    </Box> */}
                </Box>
            </main>
        </Box>
    );
};