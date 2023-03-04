import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Sections/Navbar/Navbar"
import About from "../../Sections/About/About";
import PopularSection from "../../Sections/Popular/PopularSection";
import BlogStyleOne from "../../Sections/BlogStyle/BlogStyleOne/BlogStyleOne";
import BlogStyleTwo from "../../Sections/BlogStyle/BlogStyleTwo/BlogStyleTwo";
import BlogStyleThree from "../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import Footer from "../../Sections/Footer/Footer";
import axios from "axios";
import ContextApi from "../../../ContextApi/ContextApi";
import HomeStyle from "./style.module.css"

import testImage from "../../../images/building.jpeg"

function Home() {
    const [allBlogs, setAllBlogs] = useState([])
    const [standardBlog, setStandardBlog] = useState([])
    const [commonBlog, setCommonBlog] = useState([])
    const [treadingBlog, setTreadingBlog] = useState([])
    const pageHeadingDetails = {
        title: "Home",
        des: "Home Can Help You To Decide Your Reading Blog"
    }

    const {databaseApi} = useContext(ContextApi)

    useEffect(() => {
        axios.get(`${databaseApi}/blog/blogs/all`)
            .then(res => {
                console.log(res.data.reverse());
                setAllBlogs(res.data.reverse())
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        const standard = []
        const common = []
        const treading = []

        for (let i = 0; i < allBlogs.length; i++) {
            if(allBlogs[i].category === "Standard" && standardBlog.length < 6){
                standard.push(allBlogs[i])
            }else if(allBlogs[i].category === "Common" && commonBlog.length < 7){
                common.push(allBlogs[i])
            }else if(allBlogs[i].category === "Treading" && treadingBlog.length < 6){
                treading.push(allBlogs[i])
            }else if(standardBlog.length === 5 && commonBlog.length === 6 && treadingBlog.length === 5){
                break;
            }
        }

        setStandardBlog(standard)
        setCommonBlog(common)
        setTreadingBlog(treading)
    }, [allBlogs])

    return(
        <>
            <Navbar/>
            <PageHeading pageHeadingDetails={pageHeadingDetails}/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <h3 className="mb-4 animateUnderline">Standard Blog</h3>
                        <div className="defaultBorder row p-2 mb-5">
                            <div className={`p-4 col-md-6 ${HomeStyle.standardBlogRightPart}`}>
                                <BlogStyleTwo blogData={standardBlog[0]} />
                            </div>
                            <div className={`p-4 col-md-6 ${HomeStyle.standardBlogLeftPart}`}>
                                <BlogStyleOne blogData={standardBlog[1]}/>
                                <BlogStyleOne blogData={standardBlog[2]}/>
                                <BlogStyleOne blogData={standardBlog[3]}/>
                                <BlogStyleOne blogData={standardBlog[4]}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 animateUnderline">Common Blog</h3>
                        <div className="defaultBorder d-flex justify-content-between row p-2 mb-5">
                            <div className={`p-3 col-md-6 ${HomeStyle.standardBlogRightPart}`}>
                                <div className="mb-4">
                                    <BlogStyleTwo blogData={commonBlog[0]} />
                                </div>
                                <BlogStyleOne blogData={commonBlog[2]} />
                                <BlogStyleOne blogData={commonBlog[4]} />
                            </div>
                            <div className={`p-3 col-md-6 ${HomeStyle.standardBlogLeftPart}`}>
                                <div className="mb-4">
                                    <BlogStyleTwo blogData={commonBlog[1]} />
                                </div>
                                <BlogStyleOne blogData={commonBlog[3]} />
                                <BlogStyleOne blogData={commonBlog[5]} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 animateUnderline">Treading Blog</h3>
                        <div className="mb-5">
                        <BlogStyleThree blogData={treadingBlog[0]} />
                        <BlogStyleThree blogData={treadingBlog[1]} />
                        <BlogStyleThree blogData={treadingBlog[2]} />
                        </div>
                    </div>
                </div>
                {/* Left Side */}
                <div className={`rightSectionContainer`}>
                    <About/>
                    <PopularSection/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;