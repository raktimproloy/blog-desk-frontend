import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import postStyle from "./style.module.css"
import ThemeInputsOne from "./ThemeInputs/ThemeInputsOne/ThemeInputsOne";
import ThemeOneImage from "../../../images/themeImage/themeOne.png"
import ContextApi from "../../../ContextApi/ContextApi";

function Post () {
    const {databaseApi} = useContext(ContextApi)
    const [postResponse, setPostResponse] = useState({})
    const [selectTheme, setSelectTheme] = useState("themeOne")
    const [themeOnePostItem, setThemeOnePostItem] = useState({
        file: "",
        firstDescription: "",
        secondImage: "",
        secondDescription: "",
        thirdImage: "",
        fourthImage: "",
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
        const allItems = {
            ...blogItem,
            ...themeOnePostItem
        }
        console.log(allItems);
        const formData = new FormData()
        formData.append("theme", blogItem.theme)
        formData.append("title", blogItem.title)
        formData.append("file", themeOnePostItem.file)
        formData.append("firstDescription", themeOnePostItem.firstDescription)
        formData.append("secondImage", themeOnePostItem.secondImage)

        console.log(formData);
        axios.post(databaseApi + "/blog/post", allItems)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        // const data = await fetch(databaseApi + "/blog/post", {
        //     method: "POST",
        //     body: JSON.stringify(allItems)
        // }).then(res => res.json())
        // .then(data => {
        //     setPostResponse(data)
        // })
        // .catch(err => console.log(err.message))
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
                                <ThemeInputsOne themeOnePostItem={themeOnePostItem} setThemeOnePostItem={setThemeOnePostItem}/>
                            </div>
                            <div className="text-center mt-3">
                                <input type="submit" className="bgColorLeftToRight py-3" value="Post Blog" />
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