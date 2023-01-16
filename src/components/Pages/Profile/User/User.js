import React,{useContext} from "react";
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillGooglePlusCircle, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import ProfileStyle from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";

const User = ({userData}) => {
    
    const {databaseApi} = useContext(ContextApi)
    
    return(
        <>
            <div className={`d-flex justify-content-center align-items-center mb-3 ${ProfileStyle.profileNameImage}`} >
                <img src={`${databaseApi}/${userData.profileImage}`} alt="portfolio" />
                <h1>{userData.fullName}</h1>
            </div>
            <div>
                <p>em Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </p>
                <ul className={`d-flex justify-content-around align-items-center mt-3 ${ProfileStyle.profileIcons}`}>
                    <li><BsFacebook/></li>
                    <li><BsLinkedin/></li>
                    <li><AiFillGooglePlusCircle/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillTwitterCircle/></li>
                </ul>
            </div>
        </>
    )
}

export default User;