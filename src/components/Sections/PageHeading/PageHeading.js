import React from "react";
import PageHeadingStyle from "./style.module.css"

function PageHeading ({pageHeadingDetails}) {
    return(
        <div className={`text-center py-4 ${PageHeadingStyle.container}`}>
            <h2>{pageHeadingDetails.title}</h2>
            <p>{pageHeadingDetails.des}</p>
        </div>
    )
}

export default PageHeading