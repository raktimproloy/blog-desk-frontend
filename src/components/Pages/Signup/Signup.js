import React, {useContext, useEffect, useState} from "react";
import SignupStyle from "./style.module.css"
import {Link} from "react-router-dom"
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"

function Signup() {
    const {databaseApi} = useContext(ContextApi);
    const [backendRes, setBackendRes] = useState({})
    const [inputFieldValid, setInputFieldValid] = useState("")


    const [userSignupData, setUserSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
        policyAgree: true
    })

    const handleChange = (e) => {
        setUserSignupData({...userSignupData, [e.target.name]: e.target.value})
    }

    const handlePhoto = (e) => {
        setUserSignupData({...userSignupData, profileImage: e.target.files[0]})
        console.log(userSignupData.profileImage);
    }
    
    const signupBtn = (e) => {
        e.preventDefault()
        console.log(inputFieldValid);

        if(userSignupData.fullName !== ""){
            if(userSignupData.email !== ""){
                if(userSignupData.password !== ""){
                    if(userSignupData.password === userSignupData.confirmPassword){
                        if(userSignupData.policyAgree === true){

                            const formData = new FormData()
                            formData.append("profileImage", userSignupData.profileImage)
                            formData.append("fullName", userSignupData.fullName)
                            formData.append("email", userSignupData.email)
                            formData.append("password", userSignupData.password)
                    
                            axios.post(`${databaseApi}/users/signup`, formData)
                            .then(res => {
                                console.log(res);
                            })
                            .catch(err => {
                                console.log(err);
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
                    {/* {
                        backendRes.data.message ?
                        backendRes.data.message === "Signup Successful" ?
                        <p className="text-center py-1 text-success">Signup successful</p> : 
                        "" : ""
                    } */}
                    
                    <form autoComplete="off" onSubmit={signupBtn} encType="multipart/form-data">

                        <div className="mb-3">
                            <label className="form-label">Full Name*</label>
                            <input type="text" className="form-control" name="fullName" onChange={handleChange} />
                            {
                               inputFieldValid !== "Empty fullName"?
                               "" : 
                               <div className="form-text errorOne">Input your full name</div>
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address*</label>
                            <input type="email" className="form-control" name="email" autoComplete="off" onChange={handleChange} />
                            {
                               inputFieldValid !== "Empty email" ?
                               "" : 
                               <div className="form-text errorOne">Input your email</div>
                            }
                            {
                               backendRes.error ?
                               backendRes.error.indexOf("email` is invalid") < 0 ?
                               "" : 
                               <div className="form-text errorOne">Invalid Email</div> : ""
                            }
                            {
                               backendRes.error ?
                               backendRes.error.indexOf("duplicate key error collection") < 0 ?
                               "" : 
                               <div className="form-text errorOne">Your email already used</div> : ""
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password*</label>
                            <input type="password" className="form-control" name="password" autoComplete="off" onChange={handleChange} />
                            {
                               inputFieldValid !== "Empty password" ?
                               "" : 
                               <div className="form-text errorOne">Input your password</div>
                            }
                            
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password*</label>
                            <input type="password" className="form-control" name="confirmPassword" autoComplete="off" onChange={handleChange} />
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
                            <input type="checkbox" name="policyAgree" className={`form-check-input ${SignupStyle.checkedColor} ${inputFieldValid === "policy error" ? SignupStyle.checkedColor : ""}`} onChange={handleChange} />
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