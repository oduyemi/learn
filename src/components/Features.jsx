import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const Features = () => {
    return(
        <Box className="mt-6">
            <Box maxWidth="xl" className="mx-auto">
                <Typography
                    variant="h3"
                    className="text-blu pl-6 animate__animated animate__fadeIn" 
                    sx={{ 
                        fontSize: "large", 
                        textDecoration: "underline", 
                        textDecorationColor:"#5BC0EB"
                    }}                   
                >
                    Features
                </Typography>
            </Box>
            <Box margin="10px" className="container-xxl py-5">
                <Box className="container mx-auto">
                    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Box className="wow fadeInUp" data-wow-delay="0.1s">
                            <Box className="feature-item text-center pt-3">
                                <Box className="p-4">
                                    <SchoolIcon 
                                        className="text-primary text-3xl mb-4"
                                        sx={{
                                            fontSize: 40,
                                            color: "#fff"
                                        }}
                                    />
                                    <h5 className="mb-3 text-yel">Skilled Instructors</h5>
                                    <Typography
                                        variant="h6" 
                                        paragraph 
                                        className="text-white text-lg mb-3 pb-1"
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: "16px"
                                        }}
                                        >
                                            Learn soft &amp; hard skills, led by ProGrowing mentors.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="wow fadeInUp" data-wow-delay="0.3s">
                            <Box className="feature-item text-center pt-3">
                                <Box className="p-4">
                                    <LanguageIcon 
                                        className="text-primary text-3xl mb-4"
                                        sx={{
                                            fontSize: 40,
                                            color: "#fff"
                                        }}
                                    />
                                    <h5 className="mb-3 text-yel">Online Classes</h5>
                                    <Typography
                                            variant="h6" 
                                            paragraph 
                                            className="text-white text-lg mb-3 pb-1"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: "16px"
                                            }}
                                    >
                                        Take advantage of self-paced learning on the ProGrowing platform.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="wow fadeInUp" data-wow-delay="0.5s">
                            <Box className="feature-item text-center pt-3">
                                <Box className="p-4">
                                    <HomeIcon
                                        className="text-primary text-3xl mb-4"
                                        sx={{
                                            fontSize: 40,
                                            color: "#fff"
                                        }}
                                    />
                                    <h5 className="mb-3 text-yel">Tasks</h5>
                                    <Typography
                                        variant="h6" 
                                        paragraph 
                                        className="text-white text-lg mb-3 pb-1"
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: "16px"
                                        }}
                                        >
                                            Build your portfolio with the ProGrowing Taskify, and gain mastery.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="wow fadeInUp" data-wow-delay="0.7s">
                            <Box className="feature-item text-center pt-3">
                                <Box className="p-4">
                                    <MenuBookIcon
                                        className="text-primary text-3xl mb-4"
                                        sx={{
                                            fontSize: 40,
                                            color: "#fff"
                                        }}
                                    />
                                    <h5 className="mb-3 text-yel">Mentorship</h5>
                                    <Typography
                                        variant="h6" 
                                        paragraph 
                                        className="text-white text-lg mb-3 pb-1"
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: "16px"
                                        }}
                                        >
                                            Learn from professionals who have been there done that.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}