import React, { useEffect, useState } from "react";
import NavbarStyle from "./style.module.css"
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import {Link, useLocation} from "react-router-dom"
import AuthVerification from "../../../commonFunc/AuthVerification";
import Dropdown from 'react-bootstrap/Dropdown';
import { useCookies } from "react-cookie";

function Navbar () {
    
    const [stickyClass, setStickyClass] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearchPopup, setShowSearchPopup] = useState(false)
    const [showSideNavbar, setShowSideNavbar] = useState(false)
    const [showSideNavbarDropdown, setShowSideNavbarDropdown] = useState(false)
    AuthVerification()
    const {isExp, userId, fullName, email} = AuthVerification();
    const location = useLocation()

    const [cookies, setCookie, removeCookie] = useCookies()

    const logoutBtn = () => {
        removeCookie("blogDeskToken")
    }
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 200 ? setStickyClass(true) : setStickyClass(false);
        }
      };

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

            {/* Navbar static */}
            <nav className={`navbar navbar-expand-lg navbar-light py-4 ${stickyClass}`}>
                <div className="container">
                    <h1>
                    <Link className={`navbar-brand titleText`} to={"/"}>BlogDesk</Link>
                    </h1>
                    <li className="nav-item bgColorTopToBottom mx-2 navbar-toggler">
                        <span className="nav-link pointer" onClick={() => setShowSideNavbar(true)}><AiOutlineMenu/></span>
                    </li>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item mx-2 d-flex align-items-center`} >
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/" && "bgColorLeftToRight"} bgColorLeftToRight`} to={"/"}>Home</Link>
                            </li>
                            <li className={`nav-item mx-2 d-flex align-items-center ${NavbarStyle.dropdownList}`}>
                                <Dropdown>
                                    <Dropdown.Toggle className={`${NavbarStyle.dropdownTitle} fw-bold text-dark ${location.pathname === "/category" && ""} bgColorLeftToRight`} id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=standard"}>Standard</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=common"}>Common</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=treading"}>Treading</Link></Dropdown.Item>
                                        {/* <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=inspiration"}>Inspiration</Link></Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className={`nav-item mx-2 d-flex align-items-center`}>
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/popular" && ""} bgColorLeftToRight`} to={"/popular"}>Popular</Link>
                            </li>
                            {/* to={isExp ? "/post" : "/login"} */}
                            <li className={`nav-item mx-2 d-flex align-items-center`}>
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/post" && ""} bgColorLeftToRight`} to={"/post"} >Post</Link>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                { 
                                    AuthVerification().isExp ? <Link className="nav-link bgColorTopToBottom" to={`/profile`} ><AiOutlineUser/></Link> : ""
                                }
                                
                            </li>
                            {/* <li className="nav-item bgColorTopToBottom mx-2">
                                <span className="nav-link pointer" onClick={ () => setShowSearchPopup(true)}><BiSearchAlt2/></span>
                            </li> */}
                            <li className="nav-item bgColorTopToBottom mx-2">
                                <span className="nav-link pointer" onClick={() => setShowSideNavbar(true)}><AiOutlineMenu/></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar Start */}
            <nav className={`navbar navbar-expand-lg navbar-light py-4 ${stickyClass ? "fixed" : "none"}`}>
                <div className="container">
                    <h1>
                    <Link className={`navbar-brand titleText`} to={"/"}>BlogDesk</Link>
                    </h1>
                    <li className="nav-item bgColorTopToBottom mx-2 navbar-toggler">
                        <span className="nav-link pointer" onClick={() => setShowSideNavbar(true)}><AiOutlineMenu/></span>
                    </li>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item mx-2 d-flex align-items-center`} >
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/" && ""} bgColorLeftToRight`} to={"/"}>Home</Link>
                            </li>
                            <li className={`nav-item mx-2 d-flex align-items-center ${NavbarStyle.dropdownList}`}>
                                <Dropdown>
                                    <Dropdown.Toggle className={`${NavbarStyle.dropdownTitle} fw-bold text-dark ${location.pathname === "/category" && ""} bgColorLeftToRight`} id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=standard"}>Standard</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=common"}>Common</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=treading"}>Treading</Link></Dropdown.Item>
                                        {/* <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=inspiration"}>Inspiration</Link></Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className={`nav-item mx-2 d-flex align-items-center`}>
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/popular" && ""} bgColorLeftToRight`} to={"/popular"}>Popular</Link>
                            </li>
                            <li className={`nav-item mx-2 d-flex align-items-center`}>
                                <Link className={`nav-link fw-bold text-dark ${location.pathname === "/post" && ""} bgColorLeftToRight`} to={"/post"}>Post</Link>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                { 
                                    AuthVerification().isExp ? <Link className="nav-link bgColorTopToBottom" to={`/profile`} ><AiOutlineUser/></Link> : ""
                                }
                                
                            </li>
                            {/* <li className="nav-item bgColorTopToBottom mx-2">
                                <span className="nav-link pointer" onClick={ () => setShowSearchPopup(true)}><BiSearchAlt2/></span>
                            </li> */}
                            <li className="nav-item bgColorTopToBottom mx-2">
                                <span className="nav-link pointer" onClick={() => setShowSideNavbar(true)}><AiOutlineMenu/></span>
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
                        <Link className={`navbar-brand d-block mb-4 titleText ${NavbarStyle.sideNavTitle}`} to={"/"}>BlogDesk</Link>
                        <ul className={NavbarStyle.sideNavLists}>
                            <li><a href="/">Home</a></li>
                            <li className="nav-item dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle className={`${NavbarStyle.sideNavTitle} text-dark p-0`} id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=standard"}>Standard</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=common"}>Common</Link></Dropdown.Item>
                                        <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=treading"}>Treading</Link></Dropdown.Item>
                                        {/* <Dropdown.Item className={`${NavbarStyle.dropdownItem}`}><Link className={`${NavbarStyle.dropdownItemText}`} to={"/category?c=inspiration"}>Inspiration</Link></Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li><Link to={"/popular"}>Popular</Link></li>
                            <li><Link to={"/post"}>Post</Link></li>
                            { 
                                    AuthVerification().isExp ? 
                                    <>
                                    <li><Link to={`/profile`}>Profile</Link></li> 
                                    <li><Link to={`/setting`}>Setting</Link></li> 
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