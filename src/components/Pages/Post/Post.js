import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import postStyle from "./style.module.css"
import ThemeInputsOne from "./ThemeInputs/ThemeInputsOne/ThemeInputsOne";
import ThemeInputsTwo from "./ThemeInputs/ThemeInputsTwo/ThemeInputsTwo";
import ThemeInputsThree from "./ThemeInputs/ThemeInputsThree/ThemeInputsThree";
import ThemeInputsFour from "./ThemeInputs/ThemeInputsFour/ThemeInputsFour";
import { SlArrowRight } from 'react-icons/sl';
import ThemeOneImage from "../../../images/themeImage/themeOne.png"
import ThemeTwoImage from "../../../images/themeImage/themeTwo.png"
import ThemeThreeImage from "../../../images/themeImage/themeThree.png"
import ThemeFourImage from "../../../images/themeImage/themeFour.png"
import ContextApi from "../../../ContextApi/ContextApi";
import AuthVerification from "../../../commonFunc/AuthVerification";
import MessageAlert from "../../Sections/MessageAlert/MessageAlert"
import Loading from "../../Sections/Loading/Loading";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Post () {
    const pageHeadingDetails = {
        title: "Post",
        des: "Post Can Help You To Get Your Popularity"
    }
    const navigate = useNavigate()
    const {databaseApi} = useContext(ContextApi)
    const [category, setCategory] = useState("Standard")
    const [userData, setUserData] = useState({})
    const {isExp, userId, fullName, email} = AuthVerification();
    const [themeOnePostItem, setThemeOnePostItem] = useState({
        BlogImageOne: "",
        BlogImageTwo: "",
        BlogImageThree: "",
        BlogImageFour: "",
        firstDescription: "",
        secondDescription: "",
        thirdDescription: "",
    })
    const [blogItem, setBlogItem] = useState({
        theme: "1",
        title: ""
    })

    // MessageAlert
    const [alert, setAlert] = useState(false)
    const [print, setPrint] = useState({
        topic: true,
        text: ""
    })
    
    // Loading Alert
    const [loading, setLoading] = useState(false)
    const loadingMessage = "Your blog is posting..."

    useEffect(() => {
        if(userId){
            const token = new Cookies().get("blogDeskToken")
            axios.get(`${databaseApi}/users/profile`, {headers: {"Authorization": `Bearer ${token}`}})
                .then(res => {
                    setUserData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
            
    }, [userId])

    const postBlogBtn = async (e) => {
        e.preventDefault()
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const date = new Date()
        
        const postedTime = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
        console.log(userData[0]);
        if(userData[0]?.isVerified){
            const formData = new FormData()
            formData.append("userId", userId)
            formData.append("theme", blogItem.theme)
            formData.append("title", blogItem.title)
            formData.append("category", category)
            formData.append("postedTime", postedTime)
            
            formData.append("BlogImageOne", themeOnePostItem.BlogImageOne)
            formData.append("BlogImageTwo", themeOnePostItem.BlogImageTwo)
            formData.append("BlogImageThree", themeOnePostItem.BlogImageThree)
            formData.append("BlogImageFour", themeOnePostItem.BlogImageFour)
            formData.append("firstDescription", themeOnePostItem.firstDescription)
            formData.append("secondDescription", themeOnePostItem.secondDescription)
            formData.append("thirdDescription", themeOnePostItem.thirdDescription)

            setLoading(true)
            axios.post(`${databaseApi}/blog/post`, formData)
                .then(res => {
                    setLoading(false)
                    setPrint({
                        topic: true,
                        text: "Your blog was posted!"
                    }) 
                    setAlert(true)
                    setTimeout(() => {
                        navigate(`/blog?id=${res.data.blogId}`)
                    }, 500);
                })
                .catch(err => {
                    setLoading(false)
                    setPrint({
                        topic: false,
                        text: "Please, check your items"
                    }) 
                    setAlert(true)
                })
        }else{
            console.log(userData);
            setPrint({
                topic: false,
                text: "You are not verified! Go to setting"
            }) 
            setAlert(true)
        }

    }
    return(
        <>
        {/* Message alert */}
            <Loading loadingMessage={loadingMessage} loading={loading} setLoading={setLoading} />
            <MessageAlert alert={alert} setAlert={setAlert} print={print} />
            <Navbar/>
            <PageHeading pageHeadingDetails={pageHeadingDetails} />
            <div className="container py-5 d-flex justify-content-between">
                {/* <div>
                    <p>Posted Successful</p>
                </div> */}
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                    <h1 className="text-center py-2">Post Your Blog</h1>
                    <p className="text-center pt-2">Select your theme and post your blog.</p>
                    <p className="text-center pb-2 text-danger">Note: Without verify you can't post!</p>
                    <div>
                        <form onSubmit={postBlogBtn} encType="multipart/form-data">
                            <div className="py-3">
                                <h5>Select Your Theme</h5>
                                <div className="row gx-5 gy-3">
                                    <div className={`col-xl-3 col-md-6 text-center defaultBorder ${postStyle.themeContainer} ${blogItem.theme === "1" ? postStyle.selectTheme : ""}`} onClick={() => setBlogItem({...blogItem, theme: "1" })} >
                                        <img src={ThemeOneImage} alt="Theme One" />
                                        <p>Theme One</p>
                                    </div>
                                    <div className={`col-xl-3 col-md-6 text-center defaultBorder ${postStyle.themeContainer} ${blogItem.theme === "2" ? postStyle.selectTheme : ""}`} onClick={() => setBlogItem({...blogItem, theme: "2" })} >
                                        <img src={ThemeTwoImage} alt="Theme Two" />
                                        <p>Theme Two</p>
                                    </div>
                                    <div className={`col-xl-3 col-md-6 text-center defaultBorder ${postStyle.themeContainer} ${blogItem.theme === "3" ? postStyle.selectTheme : ""}`} onClick={() => setBlogItem({...blogItem, theme: "3" })} >
                                        <img src={ThemeThreeImage} alt="Theme Three" />
                                        <p>Theme Three</p>
                                    </div>
                                    <div className={`col-xl-3 col-md-6 text-center defaultBorder ${postStyle.themeContainer} ${blogItem.theme === "4" ? postStyle.selectTheme : ""}`} onClick={() => setBlogItem({...blogItem, theme: "4" })} >
                                        <img src={ThemeFourImage} alt="Theme Four" />
                                        <p>Theme Four</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Main Title</p>
                                <input type="text" placeholder="Blog Title" className="inputStyle" name="title" onChange={(e) => {setBlogItem({...blogItem, title: e.target.value})}} value={blogItem.title || ""} />
                            </div>
                            <div>
                                <p>Category</p>
                                <ul className={`inputStyle d-flex justify-content-between align-items-center ${postStyle.selectContainer}`}>
                                    <li>{category}</li>
                                    <li className={`${postStyle.selectRightArrow}`}><SlArrowRight/></li>
                                        <ul className={`defaultBorder ${postStyle.optionContainer}`}>
                                            <li onClick={() => setCategory("Standard")}><span>Standard</span></li>
                                            <li onClick={() => setCategory("Common")}><span>Common</span></li>
                                            <li onClick={() => setCategory("Treading")}><span>Treading</span></li>
                                        </ul>
                                </ul>
                            </div>
                            <div>
                                {blogItem.theme === "1" && <ThemeInputsOne themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>}
                                {blogItem.theme === "2" && <ThemeInputsTwo themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>}
                                {blogItem.theme === "3" && <ThemeInputsThree themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>}
                                {blogItem.theme === "4" && <ThemeInputsFour themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>}
                            </div>
                            <div className="text-center mt-3">
                                <input className="bgColorLeftToRight py-3" type="submit" value="Post Blog" />
                            </div>
                        </form>
                    </div>
                </div>
                {/* Left Side */}
                <div className={`rightSectionContainer`}>
                </div>
            </div>
        </>
    )
}

export default Post;