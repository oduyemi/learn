import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import { Link } from "react-router-dom";




export const AboutBanner = () => {
    return(
        <>
            <Box className="h-96 text-white text-center grid bg-cover abt">
                <Box className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></Box>
                <Box className="col-start-1 row-start-1 mx-auto my-auto">
                    <h1 className="font-bold text-2xl">About</h1>
                    <p>Learning Center</p>
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
                            <i>Imagine learning in an environment built to give you the best learning experience.</i>
                            <br/><br/>
                            ProGrowing is a web platform where tech people looking for experienced colleagues
                            to mentor them can find and book sessions with mentors for free and get
                            mentored. On ProGrowing, as a tech person, you can browse
                            the list of available mentors. You will see a list of mentors in the chosen
                            field and their next live mentorship sessions. You can then, book a session.
                            <br/>

                        </Typography>
                        <Typography
                            variant="h6" 
                            paragraph
                            className="mb-4 text-black"
                            sx={{fontSize: "18px", fontWeight: 400}}
                        >
                            ProGrowing is an initiative aimed at mentoring programmers, teaching them both
                            soft and hard skills required to help navigate their tech career better.
                            For A blend of self-paced and instructor-led mentorship via ProGrowing tools such as Taskify,
                            Learning Center, and the ProGrowing Forum, we offer lots of hands-on
                            experience to ensure you are well-rounded in the track of your choice.
                        </Typography>
                        <Link to="">
                            <Button>Learn More</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        

        </>
    )
}