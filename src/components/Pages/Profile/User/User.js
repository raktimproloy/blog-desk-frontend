import React,{useContext} from "react";
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import ProfileStyle from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";

const User = ({userData}) => {
    
    const {databaseApi} = useContext(ContextApi)
    
    return(
        <>
            <div className={`d-flex justify-content-center align-items-center mb-4 ${ProfileStyle.profileNameImage}`} >
                <img src={`${databaseApi}/${userData?.profileImage}`} alt="portfolio" />
                <h1>{userData?.fullName}</h1>
            </div>
            <div>
                <p>{userData?.about}</p>
                <ul className={`d-flex justify-content-start align-items-center mt-3 ${ProfileStyle.profileIcons}`}>
                    {userData?.facebook !== "undefined" && <li className="me-3"><BsFacebook/></li>}
                    <li className="me-3"><BsLinkedin/></li>
                    <li className="me-3"><AiFillInstagram/></li>
                    {userData?.twitter !== "undefined" && <li className="me-3"><AiFillTwitterCircle/></li>}
                </ul>
            </div>
        </>
    )
}

export default User;