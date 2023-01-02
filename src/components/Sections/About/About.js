import React from "react";
import AboutStyle from "./style.module.css"

function About() {
    return(
        <>
            <div className={`defaultBorder p-4 mb-5 ${AboutStyle.aboutContainer}`}>
                <a className={`navbar-brand titleText`} href="/">BlogDesk</a>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-</p>
            </div>
        </>
    )
}

export default About;