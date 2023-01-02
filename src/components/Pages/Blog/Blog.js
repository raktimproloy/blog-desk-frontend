import React from "react";
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading"
import MainBlogStyle from "./style.module.css"
import ThemeOne from "./Themes/ThemeOne/ThemeOne";
import Image from "../../../images/testImage1.jpg"
import { AiFillHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

function Blog (){
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-start">
                    <div className={`leftSectionContainer`}>
                        <h1 className={MainBlogStyle.title}>This is a blog title</h1>
                        <div>
                            <ThemeOne/>
                        </div>
                        <div className="text-center py-3">
                            <span className={`ps-4`}><AiFillHeart/>{"(2)"}</span>
                            <span className={`ps-4`}><GoCommentDiscussion/>{"(2)"}</span>
                        </div>
                        <div className={`d-flex align-items-center`}>
                            <img src={Image} alt="comment image" className={MainBlogStyle.commentOwnerImage} />
                            <div className="ms-5">
                                <h5 className={MainBlogStyle.commentOwnerName}>Name</h5>
                                <p>This is a comment for this blog</p>
                            </div>
                        </div>
                        <div>
                            <h2 className={MainBlogStyle.commentTitle}>Leave a comment</h2>
                            <div>
                                <p className="mb-2">comment</p>
                                <div className="mb-3">
                                    <textarea cols="55" rows="5"  className={`p-3 ${MainBlogStyle.commentCommentBox}`} ></textarea>
                                </div>
                                <span className={`bgColorLeftToRight py-3 ${MainBlogStyle.commentButton}`}>Post Comment</span>
                            </div>
                        </div>
                    </div>
                    <div className={`defaultBorder p-4 rightSectionContainer`}>
                        <h5 className={`text-center ${MainBlogStyle.ownerSectionTitle}`}>Blog Owner</h5>
                        <div className="d-flex align-items-center">
                            <img src={Image} alt="Author image"  className={MainBlogStyle.authorImage}/>
                            <div>
                                <p className={`ps-4`}>Raktim Proloy</p>
                                <span className={`ps-4`}>Category</span>
                                <span className={`ps-4`}>29 August 2022</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Blog;