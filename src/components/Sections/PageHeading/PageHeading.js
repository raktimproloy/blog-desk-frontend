import React from "react";
import PageHeadingStyle from "./style.module.css"

function PageHeading () {
    return(
        <div className={`text-center py-4 ${PageHeadingStyle.container}`}>
            <h2>Home</h2>
            <p>This is Home</p>
        </div>
    )
}

export default PageHeading