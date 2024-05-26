import React from "react";
import { Box, Typography } from "@mui/material";
import { WhatWeDo } from "./WhatWeDo";
import { ContentFiller } from "./ContentFiler"





export const AboutBanner = () => {
    return(
        <>
            <Box className="h-96 text-white text-center grid bg-cover abt">
                <Box className="col-start-1 row-start-1 bg-blue-900 bg-opacity-75 w-full h-full"></Box>
                <Box className="col-start-1 row-start-1 mx-auto my-auto">
                    <h1 className="font-bold text-2xl">About</h1>
                    <p className="text-yel">Learning Center</p>
                </Box>
            </Box>


            <Box margin="10px" className="container-xxl py-5">
                <Box className="container mx-auto">
                    <Box maxWidth="md" className="wow fadeInUp mx-auto" data-wow-delay="0.3s">
                        <Typography
                            variant="h6"
                            className="mb-4 text-black"
                            paragraph
                            sx={{fontSize: "18px", fontWeight: 400}}
                        >
                            <i>Welcome to ProGrowing, where innovation meets mentorship.</i>
                            <br/><br/>
                            At ProGrowing, we believe in the transformative power of creativity and individuality.
                            Founded with the vision of fostering a community where developers and designers can
                            thrive, we aim to cultivate an environment that encourages innovation, mentorship,
                            and continuous growth.
                            <br/>
                        </Typography>


                        <Typography
                            variant="h6" 
                            paragraph
                            className="mb-4 text-black"
                            sx={{fontSize: "18px", fontWeight: 400}}
                            gutterBottom
                        >
                            ProGrowing is an initiative aimed at mentoring programmers, teaching them both
                            soft and hard skills required to help navigate their tech career better.
                            For A blend of self-paced and instructor-led mentorship via ProGrowing tools such as Taskify,
                            Learning Center, and the ProGrowing Forum, we offer lots of hands-on
                            experience to ensure you are well-rounded in the track of your choice.
                        </Typography>
                     
                    </Box>
                    <Box className="mt-6">
                        <WhatWeDo />                        
                    </Box>

                    <Box className="mt-6">
                        <Box className="mx-auto">
                            <Box maxWidth="md" className="mx-auto">
                                <Typography 
                                    variant="h1" 
                                    className="font-semibold animate__animated animated__pulse text-ppl pl-2 tracking-wide"
                                    sx={{ fontSize: "xx-large" }}
                                    gutterBottom
                                >
                                    Our
                                    <span><h1 className="text-yel inline"> Values</h1></span>
                                </Typography>
                                <Typography
                                    variant="h6" 
                                    paragraph
                                    className="mb-4 text-black"
                                    sx={{fontSize: "18px", fontWeight: 400}}
                                    margin="10px"
                                >
                                    <b>Creativity</b><br/>
                                    We champion creativity and encourage our members to
                                    think outside the box. No two projects should be the
                                    same; we believe in the power of unique perspectives
                                    and original ideas.<br/><br/>

                                    <b>Collaboration</b><br/>
                                    Collaboration is at the core of what we do. We bring
                                    together individuals from diverse backgrounds and
                                    expertise, fostering a collaborative spirit that
                                    drives innovation and growth.<br/><br/>

                                    <b>Growth</b><br/>
                                    Continuous growth is essential. Whether it&apos;s
                                    through mentorship, projects, or community engagement,
                                    we are committed to helping our members grow both
                                    personally and professionally.<br/><br/>
                                </Typography>
                            </Box>                    
                        </Box>
                    </Box>

                    <ContentFiller />

                </Box>
                
                {/* <Box 
                            sx={{display:"flex", justifyContent: "center", alignItems: "center"}}
                            className="mx-auto middlebox"
                        >
                            <Box margin="10px" maxWidth="sm">
                                <img src={require("../assets/images/photos/dev1.jpg")} alt="dev" />
                            </Box>

                            <Box maxWidth="sm">
                                <Typography 
                                    variant="h1" 
                                    className="font-semibold animate__animated animated__pulse text-ppl pl-2 tracking-wide"
                                    sx={{ fontSize: "xx-large" }}
                                    gutterBottom
                                >
                                    Our
                                    <span><h1 className="text-yel inline"> Mission</h1></span>
                                </Typography>
                                <Typography
                                    variant="h6" 
                                    paragraph
                                    className="mb-4 text-black"
                                    sx={{fontSize: "18px", fontWeight: 400}}
                                    margin="10px"
                                >
                                    Our mission is simple: to inspire and empower individuals
                                    to harness their unique talents and creative potential.
                                    We provide a platform where seasoned professionals and
                                    budding talents come together, share knowledge, and push
                                    the boundaries of what's possible.
                                </Typography>
                            </Box>
                        </Box> */}
            </Box>
        

        </>
    )
}