import React, { useState, useEffect, useContext} from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import defaultAvatar from "../assets/images/photos/avatar.png";




const formatDate = (dateString) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};


export const Profile = () => {
    const { user, handleLogout } = useContext(UserContext);
    const [flashMessage, setFlashMessage] = useState(null)
    const [userDetails, setUserDetails] = useState({
        userID: "",
        fname: "",
        lname: "",
        username: "",
        email: "",
        phone: "",
        img: defaultAvatar,
        createdAt: ""
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
                img: user.img || defaultAvatar,
                createdAt: user.createdAt || ""
            });
            }
        }, [user]);
    return(
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
                        <img className="w-8 rounded-full" src={userDetails.img} alt="User image" /> &nbsp;
                        <p>{userDetails.fname || user.fname} {userDetails.lname || user.lname}</p>
                    </Box>
                </nav>
            <Box className="container mx-auto rounded mb-20 pt-20 h-screen">
            <Box>

                <Box className="bg-ppl text-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <Box className="flex justify-center">
                            <img src={userDetails.img} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </Box>
                    
                    <Box className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-200">
                            {user.fname || userDetails.fname} {user.lname || userDetails.lname}</h1>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.username || userDetails.username}</p>
                        <p>
                            <span>
                                
                            </span>
                        </p>
                        <Box className="my-5 px-6">
                            <Link to="/update-profile" className="text-gray-600 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-yel hover:bg-whi hover:text-black">Edit Profile</Link>
                        </Box>
                        <Box className="flex justify-between items-center my-5 px-6">
                            <Link to="" className="text-gray-200 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-light text-sm text-center w-full py-3"><span className="text-blu font-medium">Email:</span> {user.email || userDetails.email}</Link>
                            <Link to="" className="text-gray-200 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-light text-sm text-center w-full py-3"><span className="text-blu font-medium">Phone:</span> {user.phone || userDetails.phone}</Link>
                            <Link to="" className="text-gray-200 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-light text-sm text-center w-full py-3"><span className="text-blu font-medium">Joined since</span> {formatDate(user.createdAt) || formatDate(userDetails.createdAt)}</Link>
                        </Box>

                        <Box className="w-full">
                            <h3 className="font-medium text-yel text-left px-6">Courses taken</h3>
                            <Box className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <Link to="#" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Updated his status
                                        <span className="text-gray-300 text-xs"> Started 5 days ago</span>
                                </Link>

                                <Link to="#" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Added new profile picture
                                        <span className="text-gray-300 text-xs"> Started 3 months ago</span>
                                </Link>

                                <Link to="#" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Posted new article in <span className="font-bold">#Web Dev</span>
                                    <span className="text-gray-300 text-xs"> Started 4 weeks ago</span>
                                </Link>

                                <Link to="#" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Edited website settings
                                    <span className="text-gray-300 text-xs"> Started 1 day ago</span>
                                </Link>

                                <Link to="#" className="w-full border-t border-gray-100 text-gray-400 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Added new rank
                                    <span className="text-gray-300 text-xs"> Started 6 weeks ago</span>
                                </Link>
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </main>
    </Box>
    )
}