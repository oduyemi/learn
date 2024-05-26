import React from "react";
import Button from "./elements/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export const CoursesPage = () => {

    return(
        <>
            <Box className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/data1.png")} 
                                alt="Course" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link>
                        <Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                Data Science
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">
                            SQL FOR DATA ANALYSIS</Link>
                        <p className="text-gray-500 text-sm">
                            Introduction to SQL. <br/> SQL for Data Analysis
                        </p>
                        <Box className="text-center">
                            <Link to="" > 
                                <Button variant="outline" className="md:py-2 text-white sm:py-1 md:px-6 sm:px-4 mr-3 topic animate__animated animate__slideInLeft">
                                    Start Learning
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1">6 mins ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">39 Comments</span>
                        </span>
                    </Box>
                </Box>

                <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/git1.png")} 
                                alt="Course" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link><Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                General
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">
                            UNDERSTANDING GIT &amp; GITHUB</Link>
                        <p className="text-gray-500 text-sm">
                            Introduction to Git. Understainding GitHub as a tool.
                        </p>
                        <Box className="text-center">
                            <Link to="" > 
                                <Button variant="outline" className="md:py-2 text-white sm:py-1 md:px-6 sm:px-4 mr-3 topic animate__animated animate__slideInLeft">
                                    Start Learning
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1"> 10 days ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">0 Comments</span>
                        </span>
                    </Box>
                </Box>

                <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/api1.png")} 
                                alt="Course" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link><Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                Backend Development
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">
                            ESSENTIALS OF API PRODUCT MANAGEMENT</Link>
                        <p className="text-gray-500 text-sm">
                            Essentials of API Product Management.
                        </p>
                        <Box className="text-center">
                            <Link to="" > 
                                <Button variant="outline" className="md:py-2 text-white sm:py-1 md:px-6 sm:px-4 mr-3 topic animate__animated animate__slideInLeft">
                                    Start Learning
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1">16 hours ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">9 Comments</span>
                        </span>
                    </Box>
                </Box>

                <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/js1.png")} 
                                alt="Course" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link><Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                Frontend Development
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">
                            JAVASCRIPT MASTERCLASS</Link>
                        <p className="text-gray-500 text-sm">
                            Understanding JavaScript basics.
                        </p>
                        <Box className="text-center">
                            <Link to="" > 
                                <Button variant="outline" className="md:py-2 text-white sm:py-1 md:px-6 sm:px-4 mr-3 topic animate__animated animate__slideInLeft">
                                    Start Learning
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1"> 10 days ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">0 Comments</span>
                        </span>
                    </Box>
                </Box>

                <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/prg1.png")} 
                                alt="Sunset in the mountains" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link><Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                General
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">
                            INTRODUCTION TO PROGRAMMING</Link>
                        <p className="text-gray-500 text-sm">
                            Understanding the basics of programming.
                        </p>
                        <Box className="text-center">
                            <Link to="" > 
                                <Button variant="outline" className="md:py-2 text-white sm:py-1 md:px-6 sm:px-4 mr-3 topic animate__animated animate__slideInLeft">
                                    Start Learning
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1"> 10 days ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">0 Comments</span>
                        </span>
                    </Box>
                </Box>

                {/* <Box className="rounded overflow-hidden shadow-lg flex flex-col">
                    <Link to="#"></Link>
                    <Box className="relative"><Link to="#">
                            <img className="w-full"
                                src={require("../assets/images/courses/git1.png")} 
                                alt="Sunset in the mountains" />
                            <Box
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </Box>
                        </Link><Link to="#!">
                            <Box
                                className="text-xs absolute top-0 right-0 bg-yel px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-blu transition duration-500 ease-in-out">
                                General
                            </Box>
                        </Link>
                    </Box>
                    <Box className="px-6 py-4 mb-auto">
                        <Link to="#"
                            className="font-medium text-lg inline-block hover:text-blu transition duration-500 ease-in-out inline-block mb-2">Best
                            FastFood Ideas (Yummy)</Link>
                        <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Box>
                    <Box className="px-6 py-3 flex flex-row items-center justify-between bg-ppl">
                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <span className="ml-1"> 10 days ago</span>
                        </span>

                        <span to="#" className="py-1 text-xs font-regular text-gray-200 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                </path>
                            </svg>
                            <span className="ml-1">0 Comments</span>
                        </span>
                    </Box>
                </Box> */}



            </Box>

            </Box>
        </>
    )
}