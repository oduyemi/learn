import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import axios from "axios";
import defaultAvatar from "../assets/images/photos/avatar.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const EditPassword = () => {
    const { user } = useContext(UserContext);
    const [flashMessage, setFlashMessage] = useState(null);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        userID: "",
        fname: "",
        lname: "",
        username: "",
        email: "",
        phone: "",
        img: ""
    });
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    });

    useEffect(() => {
        if (!user) {
            setFlashMessage({
                type: "error",
                message: "You need to login first!",
            });
            navigate("/login");
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
    }, [user, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://learnapi-pi.vercel.app/update/users/${user.userID}/resetpassword`, formData);
            setFlashMessage({
                type: "success",
                message: response.data.message
            });
        } catch (error) {
            setFlashMessage({
                type: "error",
                message: error.response?.data?.message || "An error occurred"
            });
        }
    };

    const toggleShowOldPassword = () => setShowOldPassword(!showOldPassword);
    const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
    const toggleShowConfirmNewPassword = () => setShowConfirmNewPassword(!showConfirmNewPassword);

    return (
        <Box className="flex">
            <Box className="flex w-2/5 md:w-1/4 h-screen">
                <Box className="mx-auto py-10">
                    <ul>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <Link to="/dashboard"><span className="font-semibold">All Courses</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5-9-5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <Link to="/my-courses"><span className="font-semibold">My Courses</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <Link to="/profile"><span className="font-semibold">Profile</span></Link>
                        </li>
                        <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <Link to="/update-password"><span className="font-semibold">Change Password</span></Link>
                        </li>
                        <Link to="/logout">
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
                <Box className="container mx-auto my-24">
                    <Box className="flex flex-col max-w-3xl mx-auto p-5 bg-white rounded-md">
                        <form onSubmit={handleSubmit}>
                            <Box className="mb-6">
                                <label htmlFor="oldPassword" className="block mb-2 text-sm text-gray-600">Old Password</label>
                                <Box className="relative">
                                    <input
                                        type={showOldPassword ? "text" : "password"}
                                        name="oldPassword"
                                        id="oldPassword"
                                        value={formData.oldPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm border-gray-200 rounded-md focus:outline-none focus:border-[#EC5252]"
                                    />
                                    <Box className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        {showOldPassword ? (
                                            <VisibilityOffIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowOldPassword}
                                            />
                                        ) : (
                                            <VisibilityIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowOldPassword}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="mb-6">
                                <label htmlFor="newPassword" className="block mb-2 text-sm text-gray-600">New Password</label>
                                <Box className="relative">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        name="newPassword"
                                        id="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm border-gray-200 rounded-md focus:outline-none focus:border-[#EC5252]"
                                    />
                                    <Box className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        {showNewPassword ? (
                                            <VisibilityOffIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowNewPassword}
                                            />
                                        ) : (
                                            <VisibilityIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowNewPassword}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="mb-6">
                                <label htmlFor="confirmNewPassword" className="block mb-2 text-sm text-gray-600">Confirm New Password</label>
                                <Box className="relative">
                                    <input
                                        type={showConfirmNewPassword ? "text" : "password"}
                                        name="confirmNewPassword"
                                        id="confirmNewPassword"
                                        value={formData.confirmNewPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm border-gray-200 rounded-md focus:outline-none focus:border-[#EC5252]"
                                    />
                                    <Box className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        {showConfirmNewPassword ? (
                                            <VisibilityOffIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowConfirmNewPassword}
                                            />
                                        ) : (
                                            <VisibilityIcon
                                                className="cursor-pointer"
                                                onClick={toggleShowConfirmNewPassword}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="mb-6">
                                <Button type="submit">Update Password</Button>
                            </Box>
                            {flashMessage && (
                                <Box className={`mt-6 p-4 ${flashMessage.type === "error" ? "bg-red-100" : "bg-green-100"} rounded-md`}>
                                    {flashMessage.message}
                                </Box>
                            )}
                        </form>
                    </Box>
                </Box>
            </main>
        </Box>
    );
};
