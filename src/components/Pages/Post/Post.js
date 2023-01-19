import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import postStyle from "./style.module.css"
import ThemeInputsOne from "./ThemeInputs/ThemeInputsOne/ThemeInputsOne";
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';
import ThemeOneImage from "../../../images/themeImage/themeOne.png"
import ContextApi from "../../../ContextApi/ContextApi";
import AuthVerification from "../../../commonFunc/AuthVerification";

function Post () {
    const {databaseApi} = useContext(ContextApi)
    const [category, setCategory] = useState("None")
    const [postResponse, setPostResponse] = useState({})
    const [selectTheme, setSelectTheme] = useState("themeOne")
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
        theme: "Theme One",
        title: ""
    })

    useEffect(() => {
        console.log(postResponse);
    }, [postResponse])

    const postBlogBtn = async (e) => {
        e.preventDefault()
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const date = new Date()
        
        console.log("date",date.getDate());
        console.log("month",monthNames[date.getMonth()]);
        console.log("month",date.getFullYear());
        const postedTime = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`

        const formData = new FormData()
        formData.append("userId", userId)
        formData.append("BlogImageOne", themeOnePostItem.BlogImageOne)
        formData.append("BlogImageTwo", themeOnePostItem.BlogImageTwo)
        formData.append("BlogImageThree", themeOnePostItem.BlogImageThree)
        formData.append("BlogImageFour", themeOnePostItem.BlogImageFour)
        formData.append("theme", blogItem.theme)
        formData.append("title", blogItem.title)
        formData.append("category", category)
        formData.append("firstDescription", themeOnePostItem.firstDescription)
        formData.append("secondDescription", themeOnePostItem.secondDescription)
        formData.append("thirdDescription", themeOnePostItem.thirdDescription)
        formData.append("postedTime", postedTime)

        axios.post(`${databaseApi}/blog/post`, formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                    <h1 className="text-center py-2">Post Your Blog</h1>
                    <p className="text-center py-2">This is description for post blog</p>
                    <div>
                        <form onSubmit={postBlogBtn} encType="multipart/form-data">
                            <div className="py-3">
                                <h5>Select Your Theme</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={`defaultBorder ${postStyle.themeContainer} ${selectTheme === "themeOne" ? postStyle.selectTheme : ""}`} onClick={() => setSelectTheme("themeOne")} >
                                        <img src={ThemeOneImage} alt="Theme One" />
                                        <p>Theme One</p>
                                    </div>
                                    <div className={`defaultBorder ${postStyle.themeContainer} ${selectTheme === "themeTwo" ? postStyle.selectTheme : ""}`} onClick={() => setSelectTheme("themeTwo")} >
                                        <img src={ThemeOneImage} alt="Theme Two" />
                                        <p>Theme Two</p>
                                    </div>
                                    <div className={`defaultBorder ${postStyle.themeContainer} ${selectTheme === "themeThree" ? postStyle.selectTheme : ""}`} onClick={() => setSelectTheme("themeThree")} >
                                        <img src={ThemeOneImage} alt="Theme Three" />
                                        <p>Theme Three</p>
                                    </div>
                                    <div className={`defaultBorder ${postStyle.themeContainer} ${selectTheme === "themeFour" ? postStyle.selectTheme : ""}`} onClick={() => setSelectTheme("themeFour")} >
                                        <img src={ThemeOneImage} alt="Theme Four" />
                                        <p>Theme Four</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Main Title</p>
                                <input type="text" placeholder="Blog Title" className="inputStyle" name="title" onChange={(e) => {setBlogItem({...blogItem, title: e.target.value})}} />
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
                                <ThemeInputsOne themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>
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