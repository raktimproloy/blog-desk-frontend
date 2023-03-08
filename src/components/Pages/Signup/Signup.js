import React, {useContext, useEffect, useState} from "react";
import SignupStyle from "./style.module.css"
import {Link, useNavigate} from "react-router-dom"
import ContextApi from "../../../ContextApi/ContextApi";

import axios from "axios"
// var CryptoJS = require("crypto-js")

function Signup() {

    const navigate = useNavigate()
    const {databaseApi} = useContext(ContextApi);
    const [backendRes, setBackendRes] = useState("")
    const [inputFieldValid, setInputFieldValid] = useState("")

    const [alert, setAlert] = useState(false)
    const print = {
        topic: true,
        text: "Your profile updated."
    }


    const [userSignupData, setUserSignupData] = useState({
        fullName: "",
        about: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
        facebook: "",
        twitter: "",
        policyAgree: false,
    })

    const handleChange = (e) => {
        setUserSignupData({...userSignupData, [e.target.name]: e.target.value})
    }

    const handlePhoto = (e) => {
        setUserSignupData({...userSignupData, profileImage: e.target.files[0]})
    }
    const handleCheckbox = (e) => {
        setUserSignupData({...userSignupData, policyAgree: e.target.checked})
    }


    
    const signupBtn = (e) => {
        e.preventDefault()
        setInputFieldValid("")
        setBackendRes("")

        if(userSignupData.fullName !== ""){
            if(userSignupData.email !== ""){
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userSignupData.email)){
                    if(userSignupData.password !== ""){
                        if(userSignupData.password === userSignupData.confirmPassword){
                            if(userSignupData.policyAgree === true){
    
                                const formData = new FormData()
                                formData.append("profileImage", userSignupData.profileImage)
                                formData.append("fullName", userSignupData.fullName)
                                formData.append("about", userSignupData.about)
                                formData.append("email", userSignupData.email)
                                formData.append("password", userSignupData.password)
                                formData.append("facebook", userSignupData.facebook)
                                formData.append("twitter", userSignupData.twitter)
                                
                                // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userSignupData), 'my-secret-key@123').toString();
                                // const postData = {userSignupData: ciphertext}
                                axios.post(`${databaseApi}/users/signup`, formData)
                                .then(res => {
                                    setInputFieldValid("")
                                    setBackendRes(res.data)
                                    setAlert(true)
                                    setUserSignupData({
                                        fullName: "",
                                        email: "",
                                        password: "",
                                        confirmPassword: "",
                                        profileImage: "",
                                        policyAgree: false
                                    })
                                    navigate("/login",{state:{created:'success'}})
                                    
                                })
                                .catch(err => {
                                    setBackendRes(err.response.data)
                                })
                            }else{
                                setInputFieldValid("policy error")
                            }
                        }else{
                            setInputFieldValid("password not matched")
                        }
                    }else{
                        setInputFieldValid("Empty password")
                    }
                }else{
                    setInputFieldValid("invalid Email")
                }
            }else{
                setInputFieldValid("Empty email")
            }
        }else{
            setInputFieldValid("Empty fullName")
        }
    }

    return(
        <>
            <div className={SignupStyle.goHome}>
                <Link className="bgColorLeftToRight py-3" to={"/"}>Go Home</Link>
            </div>
            <div className={`${SignupStyle.containerPosition}`}>
                <div className={`${SignupStyle.containerMain}`}>
                    <h1 className="text-center">Signup</h1>
                    
                    <form autoComplete="off" onSubmit={signupBtn} encType="multipart/form-data">

                        <div className="mb-3">
                            <label className="form-label">Full Name*</label>
                            <input type="text" className="form-control" name="fullName" onChange={handleChange} value={userSignupData.fullName || ""} />
                            {
                               inputFieldValid !== "Empty fullName"?
                               "" : 
                               <div className="form-text errorOne">Input your full name</div>
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address*</label>
                            <input type="email" className="form-control" name="email" autoComplete="off" onChange={handleChange} value={userSignupData.email || ""} />
                            {
                               inputFieldValid !== "Empty email" ?
                               "" : 
                               <div className="form-text errorOne">Input your email</div>
                            }
                            {
                                inputFieldValid === "invalid Email" ?
                               <div className="form-text errorOne">Invalid Email</div> : ""
                            }
                            {
                                backendRes !== "" && backendRes !== "Empty email" ?
                               backendRes.error === "Email already used" ?
                               <div className="form-text errorOne">Your email already used</div> : ""
                               : ""
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password*</label>
                            <input type="password" className="form-control" name="password" autoComplete="off" onChange={handleChange} value={userSignupData.password || ""} />
                            {
                               inputFieldValid !== "Empty password" ?
                               "" : 
                               <div className="form-text errorOne">Input your password</div>
                            }
                            
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password*</label>
                            <input type="password" className="form-control" name="confirmPassword" autoComplete="off" onChange={handleChange} value={userSignupData.confirmPassword || ""} />
                            {
                               inputFieldValid !== "password not matched" ?
                               "" : 
                               <div className="form-text errorOne">Password wasn't matched</div>
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Profile Image</label>
                            <input type="file" className="form-control" name="profileImage" autoComplete="off" onChange={handlePhoto} />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" name="policyAgree" className={`form-check-input ${inputFieldValid === "policy error" ? SignupStyle.checkedColor : ""}`} onChange={handleCheckbox} checked={userSignupData.policyAgree || false} />
                            <label className="form-check-label" >Agree with our <span>Privacy Policy</span>.</label>
                        </div>

                        <div className={`${SignupStyle.submitBtnContainer}`}>
                            <input className={`btn bgColorLeftToRight ${SignupStyle.submitBtn}`} type="submit" />
                        </div>

                        <div className={`text-center mt-3`}>
                            <Link className={SignupStyle.changePath} to={"/login"}>Do you have account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;