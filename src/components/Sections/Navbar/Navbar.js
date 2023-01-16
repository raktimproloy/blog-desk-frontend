import React, { useEffect, useState } from "react";
import NavbarStyle from "./style.module.css"
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import {Link} from "react-router-dom"
import AuthVerification from "../../../commonFunc/AuthVerification";

function Navbar () {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearchPopup, setShowSearchPopup] = useState(false)
    const [showSideNavbar, setShowSideNavbar] = useState(false)
    const [showSideNavbarDropdown, setShowSideNavbarDropdown] = useState(false)
    const {isExp, userId, fullName, email} = AuthVerification();

    const logoutBtn = () => {
        localStorage.clear()
    }
    console.log("nav", isExp);

    return(
        <>
        {/* Navbar Search Pop up */}
            <div className={showSearchPopup ? NavbarStyle.searchPopup : NavbarStyle.searchPopupHide}>
                <div className={NavbarStyle.searchPosition}>
                    <div className={NavbarStyle.searchContainer}>
                        <h1 className="mb-3">Search your blog</h1>
                        <div className={NavbarStyle.searchInput}>
                            <input type="text" className="defaultBorder" placeholder="Search and press search button" />
                            <a href="/" className="bgColorLeftToRight py-3 px-5 ms-2"><BiSearchAlt2/></a>
                        </div>
                    </div>
                </div>
                <p className={NavbarStyle.searchPopupClose}  onClick={ () => setShowSearchPopup(false)}><RxCross2/></p>
            </div>

            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar-light py-4">
                <div className="container">
                    <Link className={`navbar-brand titleText`} to={"/"}>BlogDesk</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item bgColorLeftToRight mx-2" >
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"onClick={() => setShowDropdown(!showDropdown)}>
                                    Category
                                </span>
                                <ul className={`dropdown-menu ${NavbarStyle.dropdownBox} ${showDropdown? "d-block" : ""}`}>
                                    <li><Link className="dropdown-item" to={"/category"}>Standard</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Common</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Treading</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Inspiration</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={"/category"}>Popular</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to={isExp ? "/post" : "/login"}>Post</Link>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                { 
                                    AuthVerification().isExp ? <Link className="nav-link" to={`/profile?userId=${userId}`} ><AiOutlineUser/></Link> : ""
                                }
                                
                            </li>
                            <li className="nav-item mx-2">
                                <span className="nav-link" onClick={ () => setShowSearchPopup(true)}><BiSearchAlt2/></span>
                            </li>
                            <li className="nav-item bgColorTopToBottom mx-2">
                                <span className="nav-link" onClick={() => setShowSideNavbar(true)}><AiOutlineMenu/></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Side Navbar */}
            <div className={showSideNavbar ? NavbarStyle.showSideNav : NavbarStyle.showSideNavHide}>
                <div className={NavbarStyle.sideNavRightSide}>
                    <p className={NavbarStyle.crossNav} onClick={() => setShowSideNavbar(false)}><RxCross2/></p>
                    <div className={NavbarStyle.sideNavListContainer}>
                        <Link className={`navbar-brand d-block mb-4 titleText`} to={"/"}>BlogDesk</Link>
                        <ul className={NavbarStyle.sideNavLists}>
                            <li><a href="/">Home</a></li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"onClick={() => setShowSideNavbarDropdown(!showSideNavbarDropdown)}>
                                    Category
                                </span>
                                <ul className={`dropdown-menu ${NavbarStyle.dropdownBox} ${showSideNavbarDropdown? "d-block" : ""}`}>
                                <li><Link className="dropdown-item" to={"/category"}>Standard</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Common</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Treading</Link></li>
                                    <li><Link className="dropdown-item" to={"/category"}>Inspiration</Link></li>
                                </ul>
                            </li>
                            <li><Link to={"/category"}>Popular</Link></li>
                            <li><Link to={"/post"}>Post</Link></li>
                            { 
                                    AuthVerification().isExp ? 
                                    <>
                                    <li><Link to={"/profile"}>Profile</Link></li> 
                                    <li><Link to={"/setting"}>Setting</Link></li> 
                                    <li onClick={logoutBtn}><Link to={"/login"}>Log out</Link></li> 
                                    
                                    </>
                                    : <li><Link to={"/login"}>Log in</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;