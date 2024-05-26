import React from "react";
import { Box } from "@mui/material";





export const WhatWeDo = () => {
    return(
        <Box class="bg-ppl">
            <section id="features"
                class="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">


                <Box class="relative mx-auto max-w-5xl text-center">
                    <span class="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    What we do
                    </span>
                </Box>


                <Box class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Innovation Hub</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            At the heart of ProGrowing is our Innovation Hub—a dynamic space where
                            ideas come to life. We host a variety of projects that challenge
                            conventional thinking and inspire creative problem-solving. Our members
                            are encouraged to interpret tasks in their own way, bringing their
                            distinctive touch to every project.
                        </p>
                    </Box>


                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Mentorship</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            We believe that mentorship is a cornerstone of professional growth. Our
                            mentorship program pairs experienced professionals with newcomers,
                            fostering a symbiotic relationship where both parties learn, grow, and
                            succeed together. Mentors provide guidance, share industry insights, and
                            help mentees navigate their career paths.
                        </p>
                    </Box>


                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Learning Center</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Our Learning Center is a comprehensive learning management system (LMS)
                            designed to equip mentees with the skills and knowledge they need to excel.
                            With a wide range of courses, tutorials, and resources, the Learning Center
                            is the go-to place for continuous learning and development.
                        </p>
                    </Box>

                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Forum</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            The ProGrowing Forum is a vibrant community space where members can discuss
                            ideas, share experiences, and seek advice. It's a place for collaboration
                            and networking, where questions find answers and ideas take flight.
                        </p>
                    </Box>


                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Taskify</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            Taskify is our unique task management tool that enables mentors to 
                            assign tasks to mentees and track their progress. Mentees can report 
                            on their tasks, receive feedback, and manage their work efficiently. 
                            Taskify ensures that every project is a step towards growth and success.
                        </p>
                    </Box>


                    <Box class="rounded-md border border-neutral-800 bg-yel/50 p-8 text-center shadow">
                        <h3 class="mt-6 head text-2xl text-gray-400">Community Engagement</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                            ProGrowing is more than just a platform; it's a community. We will
                            host regular events, workshops, and webinars to keep our members
                            engaged and up-to-date with the latest trends and technologies. Our 
                            community is a supportive network where members can collaborate, exchange 
                            ideas, and inspire each other.
                        </p>
                    </Box>

                </Box>

                <Box class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    style={{ backgroundImage: "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                </Box>
                <Box class="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{ backgroundImage: "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)", borderColor: "rgba(92, 79, 240, 0.2)" }}>
                </Box>

            </section>
        </Box>
    )
}