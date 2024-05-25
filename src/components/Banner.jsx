import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import { Link } from "react-router-dom";

export const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <Box className="banner">
            <Slider className="" {...settings}>
                <Box className="relative">
                    <img
                        className="w-full" 
                        src={require("../assets/images/photos/hero2.jpg")} 
                        alt="Banner Slides" 
                    />
                    <Box className="absolute top-0 left-0 w-full h-full flex items-center bg-opacity-80 bg-gray-900">
                        <Box className="container">
                            <Box className="flex justify-center pl-8 mb-10">
                                <Box className="sm:w-10/12 lg:w-8/12 ">
                                    <h5 className="text-yel uppercase mb-2 animate__animated animate__slideInDown title downed">ProGrowing Taskify</h5>
                                    <h1 className="text-white text-5xl animate__animated animate__slideInDown topic">ProGrowing Online Learning Platform</h1>
                                    <Typography
                                        variant="h6" 
                                        paragraph 
                                        className="text-white text-lg mb-3 pb-1 innertext"
                                        sx={{
                                            fontWeight: 200
                                        }}
                                        >
                                            Have access to ProGrowing Taskify, where you will be assigned projects
                                            and assignments that will give you the needed experience, and help
                                            you build your portfolio, and communication skills.
                                        </Typography>
                                    <Link to="/about"> 
                                        <Button variant="outline" className="md:py-4 sm:py-2 md:px-8 sm:px-6 mr-3 upped topic animate__animated animate__slideInLeft">
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/login" >
                                        <Button className="md:py-4 sm:py-2 md:px-8 sm:px-6 upped topic animate__animated animate__slideInRight">
                                            Login
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="relative">
                    <img
                        className="w-full" 
                        src={require("../assets/images/slides/b.jpg")} 
                        alt="Banner Slides" 
                    />
                    <Box className="absolute top-0 left-0 w-full h-full flex items-center bg-opacity-80 bg-gray-900">
                        <Box className="container">
                            <Box className="flex justify-center pl-8 mb-10">
                                <Box className="sm:w-10/12 lg:w-8/12">
                                    <h5 className="text-yel uppercase mb-2 animate__animated animate__slideInDown title downed">Free Online Courses</h5>
                                    <h1 className="text-white text-5xl animate__animated animate__slideInDown topic">Learn From The Comfort of Your Home</h1>
                                    <Typography
                                        variant="h6" 
                                        paragraph 
                                        className="text-white text-lg mb-3 pb-1 innertext"
                                        sx={{
                                            fontWeight: 200
                                        }}
                                        >
                                        Learning is a wonderful experience, and learning from the best
                                        makes everything ten times easier. The Progrowing mentors
                                        and lead instructors are all here to make your learning
                                        experience unforgettable.
                                    </Typography>
                                    <Link to="/about"> 
                                        <Button variant="outline" className="md:py-4 sm:py-2 md:px-8 sm:px-6 mr-3 topic upped animate__animated animate__slideInLeft">
                                            Read More
                                        </Button>
                                    </Link>
                                    <Link to="/login" >
                                        <Button className="md:py-4 sm:py-2 md:px-8 sm:px-6 topic upped animate__animated animate__slideInRight">
                                            Login
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slider>
        </Box>
    )
}
