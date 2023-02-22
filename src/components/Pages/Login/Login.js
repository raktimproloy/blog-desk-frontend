import React, { useContext, useEffect, useState } from "react";
import LoginStyle from "./style.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom"
import ContextApi from "../../../ContextApi/ContextApi";
import MessageAlert from "../../Sections/MessageAlert/MessageAlert"

function Login () {
    const navigate = useNavigate();
    const location = useLocation()
    const {databaseApi} = useContext(ContextApi)
    const [loginResponse, setLoginResponse] = useState({})
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: ""
    })

    // MessageAlert
    const [alert, setAlert] = useState(false)
    const print = {
        topic: true,
        text: "Your account was created.."
    }

    useEffect(() => {
        if(location?.state?.created === "success"){
            setAlert(true)
        }
    }, [])

    useEffect(() => {
        if(loginResponse.message === "Login Successful"){
            localStorage.setItem("blogDeskToken", loginResponse.token)
            navigate("/")
        }
    }, [loginResponse])

    const loginBtn = async (e) => {
        e.preventDefault();
        console.log("click");
        const data = await fetch(databaseApi + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLoginData)
        })
        .then(res => res.json())
        .then(data => setLoginResponse(data))
        .catch(err => console.log("error",err.message))
    }

    return(
        <>
        {/* Message Alert */}
        <MessageAlert alert={alert} setAlert={setAlert} print={print} />
            <div className={LoginStyle.goHome}>
                <Link className="bgColorLeftToRight py-3" to={"/"}>Go Home</Link>
            </div>
            <div className={`${LoginStyle.containerPosition}`}>
                <div className={`${LoginStyle.containerMain}`}>
                    <h1 className="text-center">Login</h1>
                    {
                        loginResponse.error ?
                        <p className="text-center py-1 text-danger">Authentication problem</p> : 
                        "" 
                    }
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" autoComplete="off" onChange={(e) => {setUserLoginData({...userLoginData, email: e.target.value})}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" autoComplete="off" onChange={(e) => {setUserLoginData({...userLoginData, password: e.target.value})}} />
                        </div>
                        <div className={`${LoginStyle.submitBtnContainer}`}>
                            <button type="submit" className={`btn bgColorLeftToRight ${LoginStyle.submitBtn}`} onClick={loginBtn} >Submit</button>
                        </div>
                        <div className="text-center mt-3">
                            <Link className={LoginStyle.changePath} to={"/signup"}>You don't have any account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;