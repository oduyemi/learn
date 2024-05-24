import React from "react";
import { Box } from "@mui/material";
import Button from "./elements/Button";




export const ContactBlock = () => {
    return(
        <Box className="max-w-screen-lg mx-auto p-5">
            <Box className="grid grid-cols-1 md:grid-cols-12 border">
                <Box className="bg-ppl md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Get In <span className="text-yel">Touch</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>

                    <Box className="flex items-center mt-5">
                        <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                    </Box>
                    <Box className="flex items-center mt-5">
                        <span className="text-sm">+93 749 99 65 50</span>
                    </Box>
                    <Box className="flex items-center mt-5">
                        <span className="text-sm">24/7</span>
                    </Box>

                </Box>
                <form className="md:col-span-8 p-10">
                    <Box className="flex flex-wrap -mx-3 mb-6">
                        <Box className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </Box>
                        <Box className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Doe" />
                        </Box>
                    </Box>
                    <Box className="flex flex-wrap -mx-3 mb-6">
                        <Box className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email" type="email" placeholder="********@*****.**" />
                        </Box>
                    </Box>

                    <Box className="flex flex-wrap -mx-3 mb-6">
                        <Box className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="10"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                        </Box>
                        <Box className="flex justify-between w-full px-3">
                            <Box className="md:flex md:items-center">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </Box>
                            <Button
                                type="submit"
                                className="text-white"
                            >
                                Send Message
                            </Button>
                        </Box>

                    </Box>

                </form>

            </Box>
        </Box>
    )
}