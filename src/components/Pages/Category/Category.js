import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import CategoryStyle from "./style.module.css"
import BlogStyleThree from "../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree"
import About from "../../Sections/About/About"
import PopularSection from "../../Sections/Popular/PopularSection"
import ContextApi from "../../../ContextApi/ContextApi";
import axios from "axios"
import { useLocation } from "react-router-dom";

function Category() {
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const category = queryParams.get("c")
    const [allBlogs, setAllBlogs] = useState([])
    const {databaseApi} = useContext(ContextApi)

    useEffect(() => {
        axios.get(`${databaseApi}/blog/blogs/all`)
            .then(res => {
                setAllBlogs(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Left Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <div>
                            {allBlogs.map(blog => 
                                blog.category.toLowerCase() === category && <BlogStyleThree blogData={blog} key={blog._id}/>
                                )}
                            {console.log(allBlogs)}
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className={`rightSectionContainer`}>
                    <About/>
                    <PopularSection/>
                </div>
            </div>
        </>
    )
}

export default Category;