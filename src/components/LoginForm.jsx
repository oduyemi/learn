import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "./elements/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <Box className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Box className="relative py-3 sm:max-w-xl sm:mx-auto animate__animated animate__fadeInUp">
                <Box
                    className="absolute inset-0 bg-gradient-to-r from-ppl to-blu shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </Box>
                <Box className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <Box className="max-w-md mx-auto">
                        <Box>
                            <h1 className="text-2xl font-semibold text-ppl">Welcome back! Login now</h1>
                        </Box>
                        <Box className="divide-y divide-gray-200">
                            <Box className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <Box className="relative">
                                    <input 
                                        autoComplete="off" 
                                        name="email" 
                                        type="text" 
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" 
                                    />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </Box>
                                <Box className="relative">
                                    <input 
                                        autoComplete="off" 
                                        name="password" 
                                        type={showPassword ? "text" : "password"} 
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" 
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
                                    <Button
                                        type="submit"
                                        className="text-white"
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
