import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import CategoryStyle from "./style.module.css"
import BlogStyleThree from "../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree"
import About from "../../Sections/About/About"
import PopularSection from "../../Sections/Popular/PopularSection"
import Footer from "../../Sections/Footer/Footer"
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"
import SeeMore from "../../Sections/SeeMore/SeeMore"
import { useLocation } from "react-router-dom";

function Category() {
    const pageHeadingDetails = {
        title: "Category",
        des: "Category Help You To Select Your Favorite Blogs"
    }
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const category = queryParams.get("c")
    const [allBlogs, setAllBlogs] = useState([])
    const {databaseApi} = useContext(ContextApi)
    const [showSeeMoreCount, setShowSeeMoreCount] = useState(10)

    useEffect(() => {
        axios.get(`${databaseApi}/blog/blogs/all`)
            .then(res => {
                setAllBlogs(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const [categoryBlogs, setCategoryBlogs] = useState([])

    useEffect(() => {
        setCategoryBlogs([])
        setShowSeeMoreCount(10)
        allBlogs.map(blog => {
            if(blog.category.toLowerCase() === category){
                setCategoryBlogs( categoryBlogs => [...categoryBlogs, blog])
            }
        })
    }, [allBlogs, category])


    return(
        <>
            <Navbar/>
            <PageHeading pageHeadingDetails={pageHeadingDetails} />
            <div className="container py-5 d-flex justify-content-between">
                {/* Left Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <div>
                            {categoryBlogs.slice(0, showSeeMoreCount).map(blog => 
                                blog.category.toLowerCase() === category && <BlogStyleThree blogData={blog} key={blog._id}/>
                            )}
                        </div>
                    </div>
                    {categoryBlogs.length > showSeeMoreCount && <SeeMore showSeeMoreCount={showSeeMoreCount} setShowSeeMoreCount={setShowSeeMoreCount} />}
                </div>
                {/* Right Side */}
                <div className={`rightSectionContainer`}>
                    <About/>
                    <PopularSection/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Category;