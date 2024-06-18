import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.password !== formData.confirmPassword) { 
                throw new Error("Both passwords must match!");
            }

            const response = await axios.post("https://learnapi-pi.vercel.app/send/register", formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log(response.data);

            setFlashMessage({
                type: "success",
                message: "Registration successful. Redirecting to Login.",
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error("Error:", error);

            let errorMessage;
            if (error.response) {
                console.log("Response Data:", error.response.data);
                errorMessage = error.response.data.message || "An error occurred during registration.";
            } else {
                console.error("Request Error:", error.request);
                errorMessage = "No response received from the server. Please try again later.";
            }

            setFlashMessage({ type: "error", message: errorMessage });
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <Box className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Box className="relative py-3 sm:max-w-xl sm:mx-auto animate__animated animate__fadeInUp">
                <Box className="absolute inset-0 bg-gradient-to-r from-ppl to-blu shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></Box>
                <Box className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <form onSubmit={handleSubmit}>  
                        <Box className="max-w-md mx-auto">
                            <Box>
                                <h1 className="text-2xl font-semibold text-ppl capitalize">Join the learning platform</h1>
                                    {flashMessage && (
                                        <Box 
                                            className={`text-center my-3 ${flashMessage.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                                            {flashMessage.message}
                                        </Box>
                                    )}
                            </Box>
                            <Box className="divide-y divide-gray-200">
                                <Box className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="fname" 
                                            type="text" 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="First name" 
                                            onChange={handleInputChange} 
                                            value={formData.fname} 
                                        />
                                        <label htmlFor="fname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name</label>
                                    </Box>
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="lname" 
                                            type="text" 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="Last name" 
                                            onChange={handleInputChange} 
                                            value={formData.lname} 
                                        />
                                        <label htmlFor="lname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
                                    </Box>
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="phone" 
                                            type="text" 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="Phone number" 
                                            onChange={handleInputChange}  
                                            value={formData.phone} 
                                        />
                                        <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
                                    </Box>
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="email" 
                                            type="email" 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="Email address" 
                                            onChange={handleInputChange} 
                                            value={formData.email} 
                                        />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </Box>
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="username" 
                                            type="text" 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="Username" 
                                            onChange={handleInputChange} 
                                            value={formData.username} 
                                        />
                                        <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Create Username</label>
                                    </Box>
                                    <Box className="relative">
                                        <input 
                                            autoComplete="off" 
                                            name="password" 
                                            type={showPassword ? "text" : "password"} 
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                            placeholder="Password"
                                            onChange={handleInputChange} 
                                            value={formData.password}  
                                        />
                                        <button 
                                            type="button" 
                                            className="absolute right-0 mt-1 inline-block mx-auto"
                                            style={{ top: "50%", transform: "translateY(-50%)" }}
                                            onClick={toggleShowPassword}
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                                        </button>
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </Box>
                                        <Box className="relative">
                                            <input 
                                                autoComplete="off" 
                                                name="confirmPassword" 
                                                type={showConfirmPassword ? "text" : "password"} 
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" 
                                                placeholder="Confirm password"
                                                onChange={handleInputChange} 
                                                value={formData.confirmPassword} 
                                            />
                                                <button 
                                                    type="button" 
                                                    className="absolute right-0 mt-1 inline-block mx-auto"

                                                    style={{ top: "50%", transform: "translateY(-50%)" }}
                                                    onClick={toggleShowConfirmPassword}
                                                >
                                                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                                                </button>
                                            <label htmlFor="confirmPassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                        </Box>
                                        <Box className="relative">
                                            <Button
                                                type="submit"
                                                className="text-white"
                                                onClick={handleSubmit}
                                            >
                                                Register
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
        </Box>
    )
}
