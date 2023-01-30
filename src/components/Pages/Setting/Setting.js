import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading";
import settingStyle from "./style.module.css"
import User from "./UserSetting/UserSetting"
import Image from './ImageSetting/ImageSetting';
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"
import { useLocation } from "react-router-dom";

const Setting = () => {
    const [updateProfile, setUpdateProfile] = useState({})
    const {databaseApi} = useContext(ContextApi)
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    useEffect(() => {
        axios.get(`${databaseApi}/users/profile/${userId}`)
            .then(res => {
                setUpdateProfile(res.data[0])
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [])

    const handleUpdate = () => {
        console.log(updateProfile);
        const formData = new FormData()

        formData.append("profileImage", updateProfile.profileImage)
        formData.append("fullName", updateProfile.fullName)
        formData.append("about", updateProfile.about)
        formData.append("email", updateProfile.email)
        formData.append("password", updateProfile.password)
        formData.append("facebook", updateProfile.facebook)
        formData.append("twitter", updateProfile.twitter)


        axios.put(`${databaseApi}/users/update/${userId}`, formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <>
        <Navbar/>
        <PageHeading/>
        <div className='container py-5 '>
            <div className="d-flex justify-content-between">
                {console.log("setting", updateProfile)}
                {/* Left Side */}
                <div className={`leftSectionContainer`}>
                    <h2 className={`text-center`}>Edit Profile</h2>
                    <div className={`d-flex align-items-center`}>
                        <p>User Setting</p>
                    </div>
                    <div>
                        <User updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} />
                    </div>
                </div>
                {/* Right Side */}
                <div className={`rightSectionContainer`}>
                    <Image databaseApi={databaseApi} updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} />
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    </>
  )
}

export default Setting