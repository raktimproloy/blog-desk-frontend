import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Sections/Navbar/Navbar';
import PageHeading from '../../Sections/PageHeading/PageHeading';
import Footer from '../../Sections/Footer/Footer';
import BlogStyleThree from '../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree';
import About from '../../Sections/About/About';
import ContextApi from "../../../ContextApi/ContextApi";
import axios from 'axios';

export const Popular = () => {
    const pageHeadingDetails = {
        title: "Category",
        des: "Category Help You To Select Your Favorite Blogs"
    }
    const {databaseApi} = useContext(ContextApi)
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        axios.get(`${databaseApi}/blog/blogs/all`)
            .then(res => {
                const sortData = res.data.sort(
                    (p1, p2) => (p1.ratingPoint < p2.ratingPoint) ? 1 : (p1.ratingPoint > p2.ratingPoint) ? -1 : 0);
                setAllBlogs(sortData)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

  return (
    <>
        <Navbar/>
        <PageHeading pageHeadingDetails={pageHeadingDetails} />
        <div className="container py-5 d-flex justify-content-between">
                {/* Left Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <div>
                            {allBlogs.map(blog => 
                                <BlogStyleThree blogData={blog} key={blog._id}/>
                            )}
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className={`rightSectionContainer`}>
                    <About/>
                </div>
            </div>
        <Footer/>
    </>
  )
}
export default Popular; 
