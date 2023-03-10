import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import themeFourStyle from "../../style.module.css"

function ThemeFour({blogData}) {
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
                <img src={`${blogData.BlogImageTwo}`} alt="Blog" className={themeFourStyle.secondImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.secondDescription.split("\n").map((line, j) => {
                    return (
                        <React.Fragment key={`line-${j}`}>
                        {line}
                        <br/>
                        </React.Fragment>
                    )
                })}</p>
                <div>
                    <img src={`${blogData.BlogImageThree}`} alt="Blog" className={themeFourStyle.thirdImage} />
                    <img src={`${blogData.BlogImageFour}`} alt="Blog" className={themeFourStyle.fourthImage} />
                </div>
                <p className={themeFourStyle.descriptionText}>{blogData.thirdDescription.split("\n").map((line, j) => {
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

export default ThemeFour;