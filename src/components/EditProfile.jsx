import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import axios from "axios";
import defaultAvatar from "../assets/images/photos/avatar.png";

export const EditProfile = () => {
  const { user, setUser, handleLogout } = useContext(UserContext);
  const [flashMessage, setFlashMessage] = useState(null);
  const [userDetails, setUserDetails] = useState({
    userID: "",
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    img: ""
  });

  useEffect(() => {
    let requestedPath = "/update-profile";
    if (!user) {
      setFlashMessage({
        type: "error",
        message: "You need to login first!",
      });
      localStorage.setItem("requestedPath", requestedPath);
      window.location.href = "/login";
    } else {
      setUserDetails({
        fname: user.fname || "",
        lname: user.lname || "",
        email: user.email || "",
        username: user.username || "",
        phone: user.phone || "",
        img: user.img || defaultAvatar 
      });
    }
  }, [user]);

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);

  const updateUserData = async () => {
    try {
      const response = await axios.put(`https://learnapi-pi.vercel.app/users/${user.id}`, {
        fname: userDetails.fname,
        lname: userDetails.lname,
        email: userDetails.email,
        username: userDetails.username,
        phone: userDetails.phone,
        img: userDetails.img,
      });

      if (response.status === 200) {
        console.log("Success:", response.data);
        setUser(response.data);
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        setFlashMessage({
          type: "success",
          message: "User details updated successfully!",
        });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setFlashMessage({
          type: "error",
          message: "Failed to update user details",
        });
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      setFlashMessage({
        type: "error",
        message: "An error occurred while updating user details",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));

    localStorage.setItem('userDetails', JSON.stringify({
      ...userDetails,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <Box className="container mx-auto">
        {/* Add content here if needed */}
      </Box>
    );
  }

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
                        <img className="w-8 rounded-full" src={userDetails.img || user.img} alt="User image" /> &nbsp;
                        <p>{userDetails.fname || user.fname} {userDetails.lname || user.lname}</p>
                    </Box>
                </nav>
      <Box className="container mx-auto rounded mb-20 h-screen">
        <Box className="flex flex-col md:flex-row shadow mt-20">
              <Box maxWidth="sm" className="my-7">
                <img 
                    src={userDetails.img || user.img} 
                    alt="" 
                    className="rounded-full w-40 mt-8 ml-auto
                    h-40 shadow-md border-4 border-white transition 
                    duration-200 transform hover:scale-110" 
                />

                <Box className="w-1/3 mx-auto">  
                  <input
                    name="img"
                    type="file"
                    className="form-control px-2 mt-4"
                    onChange={handleChange}
                  />
                </Box>
              </Box>
          <Box maxWidth="sm" className="md:w-5/12 border-r mx-auto">
            <Box className="p-6 py-10">
              <Box className="flex justify-between items-start mb-6">
                <h3 className="text-right">Personal Information</h3>
              </Box>
              {flashMessage && (
                <Box className={`alert ${flashMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                  {flashMessage.message}
                </Box>
              )}

              <Box className="flex flex-col md:flex-row mt-8">
                <Box className="w-full md:w-6/12 pr-4">
                  <label className="labels" htmlFor="fname">First Name</label>
                  <input
                    name="fname"
                    type="text"
                    className="form-control px-2"
                    value={userDetails.fname || user.fname}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="w-full md:w-6/12 pl-4">
                  <label className="labels" htmlFor="lname">Last Name</label>
                  <input
                    name="lname"
                    type="text"
                    className="form-control px-2"
                    value={userDetails.lname || user.lname}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box className="flex flex-col md:flex-row mt-8">
                <Box className="w-full md:w-6/12 pr-4">
                  <label className="labels" htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control px-2"
                    value={userDetails.email || user.email}
                    onChange={handleChange}
                  />
                </Box>
                <Box className="w-full md:w-6/12 pl-4">
                  <label className="labels" htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control px-2"
                    value={userDetails.phone || user.phone}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box className="w-full md:w-6/12 my-4">
                <label className="labels font-medium" htmlFor="username">Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control px-2"
                  value={userDetails.username || user.username}
                  onChange={handleChange}
                />
              </Box>
              <Box className="flex items-center justify-start mt-4">
                <Button onClick={updateUserData} className="text-white">Update Profile</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
    </Box>
  );
};
