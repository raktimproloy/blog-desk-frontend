import React, { useEffect, useContext, useState } from "react";
import ProfileStyle from "./style.module.css"
import ProfileBlog from "./ProfileBlog/ProfileBlog";
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading"
import User from "./User/User";
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"
import { useLocation } from "react-router-dom";

function Profile() {
    
    const [userData, setUserData] = useState([])
    const {databaseApi} = useContext(ContextApi)
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    useEffect(() => {
        axios.get(`${databaseApi}/users/profile/${userId}`)
            .then(res => {
                setUserData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [])
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                {userData.map((user) =>
                    <div key={user._id}>
                        <div className={ProfileStyle.profileDetailsContainer}>
                            
                                
                                <User userData={user}/>
                                
                        </div>
                        <div className="my-4">
                            {
                                user.blogs?.reverse().map(blog => 
                                    <ProfileBlog key={blog} blogId={blog} />
                                    
                                )
                            }
                        </div>
                    
                    </div>

                    )}
                </div>
                {/* Left Side */}
                <div className={`rightSectionContainer`}>

                </div>
            </div>
            
        </>
    )
}

export default Profile;