import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import themeFourStyle from "../../style.module.css"

function ThemeTwo({blogData}) {
    const {databaseApi} = useContext(ContextApi)
    return(
        <>
            <div>
                <img src={`${databaseApi}/${blogData.BlogImageOne}`} alt="Blog" className={themeFourStyle.firstImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.firstDescription.split("\n").map((line, j) => {
                    return (
                        <React.Fragment key={`line-${j}`}>
                        {line}
                        <br/>
                        </React.Fragment>
                    )
                })}</p>

                <img src={`${databaseApi}/${blogData.BlogImageTwo}`} alt="Blog" className={themeFourStyle.secondImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.secondDescription.split("\n").map((line, j) => {
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

export default ThemeTwo;