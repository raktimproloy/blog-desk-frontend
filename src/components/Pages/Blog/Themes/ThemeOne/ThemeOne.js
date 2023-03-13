import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import themeFourStyle from "../../style.module.css"

function ThemeOne({blogData}) {
    const {databaseApi} = useContext(ContextApi)
    return(
        <>
            <div>
                <img src={`${blogData.BlogImageOne}`} alt="Blog" className={themeFourStyle.firstImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.firstDescription.split("\n").map((line, j) => {
                    return (
                        <React.Fragment key={`line-${j}`}>
                        {line}
                        <br/>
                        </React.Fragment>
                    )
                })}</p>
            </div>
        </>
    )
}

export default ThemeOne;