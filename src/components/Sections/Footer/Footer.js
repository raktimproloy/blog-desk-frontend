import React from 'react'
import FooterStyle from "./style.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube} from 'react-icons/fi';

function Footer() {
  return (
    <div className={`py-3 ${FooterStyle.backGround}`}>
        <div className={`container`} >
            <div className={`row justify-content-between align-items-center ${FooterStyle.footerContainer}`}>
                <p className='col-md-6'>© 2023 BlogDesk, made by Raktim</p>
                <ul className={`d-flex justify-content-around align-items-center m-0 col-xl-3 col-lg-3 col-md-3 ${FooterStyle.footerIconsContainer}`}>
                    <li className='bgColorTopToBottom pointer'><FiFacebook/></li>
                    <li className='bgColorTopToBottom pointer'><FiLinkedin/></li>
                    <li className='bgColorTopToBottom pointer'><FiInstagram/></li>
                    <li className='bgColorTopToBottom pointer'><BsTwitter/></li>
                    <li className='bgColorTopToBottom pointer'><FiYoutube/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer