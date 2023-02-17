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
    const pageHeadingDetails = {
        title: "Home",
        des: "Home Can Help You To Decide Your Reading Blog"
    }
    const [userData, setUserData] = useState([])
    const [userBlog, setUserBlog] = useState([])
    const {databaseApi} = useContext(ContextApi)
    const [deletedBlog, setDeletedBlog] = useState("")
    const [deletePopup, setDeletePopup] = useState(false)
    const [deletedSuccessful, setDeletedSuccessful] = useState(false)
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    useEffect(() => {
        axios.get(`${databaseApi}/users/profile/${userId}`)
            .then(res => {
                setUserData(res.data[0]);
                setUserBlog(res.data[0].blogs.reverse())
            })
            .catch(err => {
                console.log(err);
            })
    }, [deletedSuccessful])

    const deleteBlog = () => {
        axios.delete(`${databaseApi}/blog/delete/${deletedBlog}`)
            .then(res => {
                console.log("Success");
                console.log(res);
                setDeletedSuccessful(!deletedSuccessful)
                })
                .catch(err => {
                    console.log("error");
                    console.log(err);
                })
    }

    return(
        <>
            <Navbar/>
            <PageHeading pageHeadingDetails={pageHeadingDetails} />
            <div className={`${ProfileStyle.deletePopup} d-flex justify-content-center align-items-center ${deletePopup ? "d-block" : "d-none"}`}>
                <div className={`${ProfileStyle.deletePopupBlock}`}>
                    <h5>Do you want to delete?</h5>
                    <div className={`d-flex justify-content-between align-items-center mt-4`}>
                        <span className={`bgColorLeftToRight py-1 pointer`} onClick={() => {deleteBlog(); setDeletePopup(false)}} >Yes</span>
                        <span className={`bgColorLeftToRight py-1 pointer`} onClick={() => setDeletePopup(false)} >No</span>
                    </div>
                </div>
            </div>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                {
                    <div key={userData._id}>
                        <div className={ProfileStyle.profileDetailsContainer}>
                            
                                
                                <User userData={userData}/>
                                
                        </div>
                        <div className="my-4">
                            {
                                userBlog.map(blog => 
                                    <ProfileBlog key={blog} blogId={blog} setDeletedBlog={setDeletedBlog} setDeletePopup={setDeletePopup} />
                                    
                                )
                            }
                        </div>
                    
                    </div>

                    }
                </div>
                {/* Left Side */}
                <div className={`rightSectionContainer`}>

                </div>
            </div>
            
        </>
    )
}

export default Profile;