import React from "react";
import AboutStyle from "./style.module.css"

function About() {
    return(
        <>
            <div className={`defaultBorder p-4 ${AboutStyle.aboutContainer}`}>
                <a className={`navbar-brand titleText`} href="/">BlogDesk</a>
                <p>Blog-Desk is a dynamic blogging platform that allows people to share their ideas and stories with the world. Whether you're an experienced blogger or just starting out, our user-friendly website provides a welcoming space where you can publish your content, connect with others, and engage in meaningful conversations. Join our community today and let your voice be heard!</p>
            </div>
        </>
    )
}

export default About;