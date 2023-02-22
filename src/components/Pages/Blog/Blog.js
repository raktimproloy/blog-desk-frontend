import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Sections/Navbar/Navbar"
import PageHeading from "../../Sections/PageHeading/PageHeading"
import MainBlogStyle from "./style.module.css"
import ThemeOne from "./Themes/ThemeOne/ThemeOne";
import ThemeTwo from "./Themes/ThemeTwo/ThemeTwo";
import ThemeThree from "./Themes/ThemeThree/ThemeThree";
import ThemeFour from "./Themes/ThemeFour/ThemeFour";
import Comment from "./Comment/Comment";
import ContextApi from "../../../ContextApi/ContextApi";
import { AiFillHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthVerification from "../../../commonFunc/AuthVerification";

function Blog (){
    const pageHeadingDetails = {
        title: "Home",
        des: "Home Can Help You To Decide Your Reading Blog"
    }
    const [userData, setUserData] = useState([])
    const [count, setCount] = useState(0)
    const [blogData, setBlogData] = useState({})
    const [isLiked, setIsLiked] = useState(false)
    const [comment, setComment] = useState("")
    const [countLike, setCountLike] = useState(0)
    const [commentData, setCommentData] = useState([])
    const {databaseApi} = useContext(ContextApi)
    const navigate = useNavigate()
    
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)
    const blogId = queryParams.get("id")

    

    useEffect(() => {
        axios.get(`${databaseApi}/blog/${blogId}`)
            .then(res => {
                setBlogData(res.data[0]);
                setCommentData(res.data[0].comments.reverse())
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [count])

    useEffect(() => {
        const userId = blogData.author
        console.log(userId === undefined);
        if(userId !== undefined){
            getUserData(userId)
            setCountLike(blogData.likes.length)
            blogData.likes.map(like => {
                if(like === AuthVerification().userId){
                    setIsLiked(true)
                }
            })
        }
        
        
    }, [blogData])

    const ratingCount = (clicked) => {
        console.log(blogData);
    }

    useEffect(() => {
        if(blogData._id !== undefined){
            console.log(blogData);
            let sessionBlogsId = JSON.parse(sessionStorage.getItem("blogs"))
            if(sessionBlogsId){
                if(!sessionBlogsId.includes(blogId)){
                    ratingCount(blogData)
                    sessionStorage.setItem("blogs", JSON.stringify([...sessionBlogsId, blogId]))
                }else{
                    console.log("Acha");
                }
            }else{
                ratingCount(blogData)
                sessionStorage.setItem("blogs", JSON.stringify([blogId]))
            }
        }
    }, [blogData])

    const getUserData = (userId) => {
        axios.get(`${databaseApi}/users/profile/${userId}`)
            .then(res => {
                setUserData(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const clickLike = () => {
        if(AuthVerification().isExp){
            const userId = {
                clickFor: isLiked ? "dislike": "like",
                id: AuthVerification().userId
            } 
            axios.post(`${databaseApi}/blog/like/${blogId}`, userId)
                .then(res => {
                    console.log(res);
                    setIsLiked(!isLiked)
                    console.log("Why click",userId.clickFor);
                    if(userId.clickFor === "dislike"){
                        setCountLike(countLike - 1)
                    }else{
                        setCountLike(countLike + 1) 
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            
        }else{
            navigate("/login")
        }
    }

    const handleComment = (e) => {
        e.preventDefault()
        setComment(e.target.value)
    }

    const handleCommentPost = () => {
        if(AuthVerification().isExp){
            if(comment.trim() !== ""){
                const commentData = {
                    id: AuthVerification().userId,
                    comment: comment
                } 
                axios.post(`${databaseApi}/blog/comment/${blogId}`, commentData)
                    .then(res => {
                        console.log(res);
                        setCount(count+ 1)
                        setComment("")
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }else{
                console.log("Empty Comment");
            }
        }else{
            navigate("/login")
        }
    }

    return(
        <>
            <Navbar/>
            <PageHeading pageHeadingDetails={pageHeadingDetails} />
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-start">
                    <div className={`leftSectionContainer`}>
                        <h1 className={MainBlogStyle.title}>{blogData.title}</h1>
                        <div>
                            {
                                blogData.theme === "themeOne" && <ThemeOne blogData={blogData}/>
                            }
                            {
                                blogData.theme === "themeTwo" && <ThemeTwo blogData={blogData}/>
                            }
                            {
                                blogData.theme === "themeThree" && <ThemeThree blogData={blogData}/>
                            }
                            {
                                blogData.theme === "themeFour" && <ThemeFour blogData={blogData}/>
                            }
                        </div>
                        <div className="text-center py-3">
                            <span className={`ps-4 pointer ${isLiked && MainBlogStyle.liked}`} onClick={clickLike}><AiFillHeart/>{` (${countLike})`}</span>
                            <span className={`ps-4`}><GoCommentDiscussion/>{`(${blogData.comments?.length})`}</span>
                        </div>
                        <div className="mb-5">
                            <h2 className={MainBlogStyle.commentTitle}>Leave a comment</h2>
                            <div>
                                <p className="mb-2">comment</p>
                                <div className="mb-3">
                                    <textarea cols="55" rows="5"  className={`p-3 ${MainBlogStyle.commentCommentBox}`} onChange={(e) => handleComment(e)} value={comment} ></textarea>
                                </div>
                                <span className={`bgColorLeftToRight py-3 ${MainBlogStyle.commentButton}`} onClick={handleCommentPost}>Post Comment</span>
                            </div>
                        </div>
                        {commentData?.map(commentId => 
                                <Comment commentId={commentId} key={commentId} />
                            )}
                        
                    </div>
                    <div className={`defaultBorder p-4 rightSectionContainer`}>
                        <h5 className={`text-center ${MainBlogStyle.ownerSectionTitle}`}>Blog Owner</h5>
                        {
                            userData &&
                            <div className="d-flex align-items-center">
                                <img src={`${databaseApi}/${userData.profileImage}`} alt="Author"  className={MainBlogStyle.authorImage}/>
                                <div>
                                    <p className={`ps-4`}>{userData.fullName}</p>
                                    <span className={`ps-4`}>{blogData.category}</span>
                                    <span className={`ps-4`}>{blogData.postedTime}</span>
                                </div>
                            </div>
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Blog;