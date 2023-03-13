import React, { useContext, useEffect, useState } from "react";
import PopularBlog from "./PopularBlog/PopularBlog"
import ContextApi from "../../../ContextApi/ContextApi";
import axios from 'axios';

function PopularSection(){
    const {databaseApi} = useContext(ContextApi)
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        axios.get(`${databaseApi}/blog/blogs/all`)
            .then(res => {
                const sortData = res.data.sort(
                    (p1, p2) => (p1.ratingPoint < p2.ratingPoint) ? 1 : (p1.ratingPoint > p2.ratingPoint) ? -1 : 0);
                setAllBlogs(sortData.slice(0, 3))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return(
        <>
            <div className="defaultBorder text-center p-4">
                <h1 className="titleText">Popular Blogs</h1>
                <div>
                    {allBlogs.map(blog => 
                    <PopularBlog blogData={blog} key={blog._id} />
                        // <BlogStyleThree blogData={blog} key={blog._id}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default PopularSection;