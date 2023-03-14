import React,{useContext} from "react";
import { BsTwitter } from 'react-icons/bs';
import { FiFacebook, FiLinkedin, FiInstagram} from 'react-icons/fi';
import ProfileStyle from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";

const User = ({userData}) => {
    const {databaseApi} = useContext(ContextApi)
    const navigate = useNavigate()

    const handleFacebook = (button) => {
        if(button === "facebook" && userData?.facebook !== ""){
            window.location.assign(`${userData?.facebook}`)
        }else if (button === "twitter" && userData?.twitter !== ""){
            window.location.assign(`${userData?.twitter}`)
        }else if (button === "linkedin" && userData?.linkedin !== ""){
            window.location.assign(`${userData?.linkedin}`)
        }else if (button === "instagram" && userData?.instagram0 !== ""){
            window.location.assign(`${userData?.instagram}`)
        }else{
            navigate("/setting")
        }
    }
    
    return(
        <>
            <div className={`d-flex justify-content-center align-items-center mb-4 ${ProfileStyle.profileNameImage}`} >
                {/* <img src={`${databaseApi}/${userData?.profileImage}`} alt="portfolio" className={ProfileStyle.profileImage} /> */}
                <img src={`${userData?.profileImage}`} alt="portfolio" className={ProfileStyle.profileImage} />
                <h1>{userData?.fullName}</h1>
            </div>
            <div>
                <p className={`${userData?.about === "" ? "pointer": ""}`} onClick={() => userData?.about === "" && navigate("/setting")} >{userData?.about !== "" ? userData.fullName : "Write your bio"}</p>
                <ul className={`d-flex justify-content-start align-items-center mt-3 ${ProfileStyle.profileIcons}`}>
                    <li className="me-3 bgColorTopToBottom pointer" onClick={() => handleFacebook("facebook")}><FiFacebook /></li>
                    <li className="me-3 bgColorTopToBottom pointer" onClick={() => handleFacebook("twitter")}><BsTwitter/></li>
                    <li className="me-3 bgColorTopToBottom pointer" onClick={() => handleFacebook("linkedin")}><FiLinkedin/></li>
                    <li className="me-3 bgColorTopToBottom pointer" onClick={() => handleFacebook("instagram")}><FiInstagram/></li>
                </ul>
            </div>
        </>
    )
}

export default User;