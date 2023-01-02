import React from "react"
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import ThemeInputsOne from "./ThemeInputs/ThemeInputsOne/ThemeInputsOne";

function Post () {
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
                        <div>
                            <h5>Select Your Theme</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="defaultBorder">
                                    <img src="Theme" alt="Theme Image" />
                                    <p>Theme One</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Main Title</p>
                            <input type="text" placeholder="Blog Title" className="inputStyle" />
                        </div>
                        <div>
                            <ThemeInputsOne/>
                        </div>
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