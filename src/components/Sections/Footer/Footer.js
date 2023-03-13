import React from 'react'
import FooterStyle from "./style.module.css"
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import { ImYoutube} from 'react-icons/im';

function Footer() {
  return (
    <div className={`py-3 ${FooterStyle.backGround}`}>
        <div className={`container`} >
            <div className={`row justify-content-between ${FooterStyle.footerContainer}`}>
                <p className='col-md-6'>© 2023 BlogDesk, made by Raktim</p>
                <ul className={`d-flex justify-content-between align-items-center m-0 col-xl-2 col-lg-3 col-md-3 ${FooterStyle.footerIconsContainer}`}>
                    <li><BsFacebook className="pointer" /></li>
                    <li><BsLinkedin className="pointer"/></li>
                    <li><AiFillInstagram className="pointer"/></li>
                    <li><AiFillTwitterCircle className="pointer"/></li>
                    <li><ImYoutube className="pointer"/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer