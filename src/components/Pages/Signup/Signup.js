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
        policyAgree: false
    })
    
    const signupBtn = async (e) => {
        e.preventDefault()
        console.log("Clicked");

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

                            await axios.post(`${databaseApi}/users/signup`, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then(res => {console.log(res);})
                            .catch(err => {console.log(err);})
                            // const data = await fetch(databaseApi + "/users/signup", {
                            //     method: "POST",
                            //     headers: {
                            //         "Content-Type": "application/json"
                            //     },
                            //     body: JSON.stringify({
                            //         fullName: userSignupData.fullName,
                            //         email: userSignupData.email,
                            //         password: userSignupData.password
                            //     })
                            // }).then(res => res.json())
                            // .then(data => {
                            //     setBackendRes(data)
                            // })
                            // .catch(err => console.log(err.message))
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
                    {
                        backendRes.message ?
                        backendRes.message === "Signup Successful" ?
                        <p className="text-center py-1 text-success">Signup successful</p> : 
                        "" : ""
                    }
                    
                    <form autoComplete="off">

                        <div className="mb-3">
                            <label className="form-label">Full Name*</label>
                            <input type="text" className="form-control" name="fullName" onChange={(e) => {setUserSignupData({...userSignupData, fullName: e.target.value})}} />
                            {
                               inputFieldValid !== "Empty fullName"?
                               "" : 
                               <div className="form-text errorOne">Input your full name</div>
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email address*</label>
                            <input type="email" className="form-control" name="email" autoComplete="off" onChange={(e) => {setUserSignupData({...userSignupData, email: e.target.value})}} />
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
                            <input type="password" className="form-control" name="password" autoComplete="off" onChange={(e) => {setUserSignupData({...userSignupData, password: e.target.value})}} />
                            {
                               inputFieldValid !== "Empty password" ?
                               "" : 
                               <div className="form-text errorOne">Input your password</div>
                            }
                            
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password*</label>
                            <input type="password" className="form-control" name="confirmPassword" autoComplete="off" onChange={(e) => {setUserSignupData({...userSignupData, confirmPassword: e.target.value})}} />
                            {
                               inputFieldValid !== "password not matched" ?
                               "" : 
                               <div className="form-text errorOne">Password wasn't matched</div>
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Profile Image</label>
                            <input type="file" className="form-control" name="profileImage" autoComplete="off" onChange={(e) => {setUserSignupData({...userSignupData, profileImage: e.target.files[0]})}} />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className={`form-check-input ${SignupStyle.checkedColor} ${inputFieldValid === "policy error" ? SignupStyle.checkedColor : ""}`} onChange={(e) => {setUserSignupData({...userSignupData, policyAgree: e.target.checked})}} />
                            <label className="form-check-label" >Agree with our <span>Privacy Policy</span>.</label>
                        </div>

                        <div className={`${SignupStyle.submitBtnContainer}`}>
                            <button type="submit" className={`btn bgColorLeftToRight ${SignupStyle.submitBtn}`} onClick={signupBtn}>Submit</button>
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