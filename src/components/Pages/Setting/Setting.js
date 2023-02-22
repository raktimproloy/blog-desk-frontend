import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading";
import settingStyle from "./style.module.css"
import User from "./UserSetting/UserSetting"
import Image from './ImageSetting/ImageSetting';
import ContextApi from "../../../ContextApi/ContextApi";
import Footer from "../../Sections/Footer/Footer"
import MessageAlert from '../../Sections/MessageAlert/MessageAlert';
import axios from "axios"
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from "react-router-dom";

const Setting = () => {
    const pageHeadingDetails = {
        title: "Home",
        des: "Home Can Help You To Decide Your Reading Blog"
    }
    const [updateProfile, setUpdateProfile] = useState({})
    const [presentImage, setPresentImage] = useState("")
    const [popup, setPopup] = useState(false)
    const [popupPassword, setPopupPassword] = useState(false)
    const [updated, setUpdated] = useState("")
    const [updatedError, setUpdatedError] = useState("")
    const [otp, setOtp] = useState("")
    const [checkOtp, setCheckOtp] = useState(true)
    const [render, setRender] = useState(false)
    const {databaseApi} = useContext(ContextApi)
    // alert message
    const [alert, setAlert] = useState(false)
    const print = {
        topic: true,
        text: "Your profile updated."
    }
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const userId = queryParams.get("userId")

    useEffect(() => {
        axios.get(`${databaseApi}/users/profile/${userId}`)
            .then(res => {
                setUpdateProfile(res.data[0])
                setPresentImage(res.data[0].profileImage)
                setUpdated("")
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [updated, render])
    
    const handlePassword = (e) => {
        e.preventDefault()
        console.log("password",updateProfile);
        
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
            setUpdated("updated")
            setPopupPassword(false)
            setAlert(true)
        })
        .catch(err => {
            console.log(err.response.data.error);
            setUpdatedError(err.response.data.error)
        })
        
    }

    const handleUpdate = () => {
        setPopupPassword(true)
        setUpdateProfile({...updateProfile, password: ""})
        console.log("setting",updateProfile);
    }

    const handleOtpSubmit = (e) => {
        e.preventDefault()

        const sendOtp = {"getOtp": otp}
        axios.put(`${databaseApi}/users/verify/${userId}`, sendOtp)
        .then(res => {
            setCheckOtp(true)
            setPopup(false)
            console.log("Success", res);
            setRender(!render)
        })
        .catch(err => {
            console.log("Error",err);
            setCheckOtp(false)
        })
    }
  return (
    <>
    {/* Message alert Popup */}
    <MessageAlert alert={alert} setAlert={setAlert} print={print} />
    {/* Pop up for otp verification */}
        <div className={`${settingStyle.inputOtp} ${!popup && settingStyle.inputOtpClose}`}>
            <p className={settingStyle.searchPopupClose} onClick={() => {setPopup(false);
                                                                        setOtp("");
                                                                        setCheckOtp(true)}} ><RxCross2/></p>
            <form>
                <p className={`${settingStyle.verifyPopupErrorText} ${!checkOtp ? "d-block" : "d-none"} `}>Invalid OTP</p>
                <h5 className='text-white mb-3'>Check your email and enter the OTP.</h5>
                <input type="number" onChange={(e) => setOtp(e.target.value)} value={otp || ""} className={`${settingStyle.otpInput} inputStyle`} />
                <div className='text-center'>
                    <input type="submit" onClick={handleOtpSubmit} className="bgColorLeftToRight py-2" />
                </div>
            </form>
        </div>

        {/* pop up for password verification */}
        <div className={`${settingStyle.inputOtp} ${!popupPassword && settingStyle.inputOtpClose}`}>
            <p className={settingStyle.searchPopupClose} onClick={() => {setPopupPassword(false);
                                                                        setUpdateProfile({...updateProfile, password: ""})
                                                                        }} ><RxCross2/></p>
            <form>
                <p className={`${settingStyle.verifyPopupErrorText} ${updatedError === "Authentication Error!" ? "d-block" : "d-none"} `}>Invalid Password</p>
                <p className={`${settingStyle.verifyPopupErrorText} ${updatedError === "Id not verified!" ? "d-block" : "d-none"} `}>User not verified</p>
                <h5 className='text-white mb-3'>Input your password</h5>
                <input type="password" onChange={(e) => setUpdateProfile({...updateProfile, password: e.target.value})} value={updateProfile.password || ""} className={`${settingStyle.otpInput} inputStyle`} />
                <div className='text-center'>
                    <input type="submit" onClick={handlePassword} className="bgColorLeftToRight py-2" value="Done" />
                </div>
            </form>
        </div>
        
        <Navbar/>
        <PageHeading pageHeadingDetails={pageHeadingDetails} />

        <div className={`container py-5`}>
            <h2 className={`text-center mb-4`}>Edit Profile</h2>
            <div className="d-flex justify-content-between">
                {/* Left Side */}
                <div className={`leftSectionContainer`}>
                    <div className={`d-flex align-items-center mb-2`}>
                        <h4>User Setting</h4>
                    </div>
                    <div>
                        <User updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} setPopup={setPopup} />
                    </div>
                </div>
                {/* Right Side */}
                <div className={`rightSectionContainer`}>
                    <Image databaseApi={databaseApi} updateProfile={updateProfile} setUpdateProfile={setUpdateProfile} presentImage={presentImage} />
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <button className='bgColorLeftToRight py-2 mt-3' onClick={handleUpdate}>Update</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Setting