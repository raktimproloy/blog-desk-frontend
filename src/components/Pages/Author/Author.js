import React, { useEffect, useContext, useState } from "react";
import ProfileStyle from "./style.module.css"
import ProfileBlog from "./ProfileBlog/ProfileBlog";
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading"
import User from "./User/User";
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

function Author() {
    console.log("Author");
    const pageHeadingDetails = {
        title: "Home",
        des: "Home Can Help You To Decide Your Reading Blog"
    }
    const navigate = useNavigate()
    const [userData, setUserData] = useState([])
    const [userBlog, setUserBlog] = useState([])
    const {databaseApi} = useContext(ContextApi)
    const [deletedBlog, setDeletedBlog] = useState("")
    const [deletePopup, setDeletePopup] = useState(false)
    const [deletedSuccessful, setDeletedSuccessful] = useState(false)

    const token = new Cookies().get("blogDeskToken")

    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    useEffect(() => {

        axios.get(`${databaseApi}/blog/author/${userId}`)
            .then(res => {
                console.log(res);
                setUserData(res.data[0]);
                setUserBlog(res.data[0].blogs.reverse())
            })
            .catch(err => {
                if(err.response.data.error === "Authentication failure!"){
                    navigate("/login")
                }
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

export default Author;