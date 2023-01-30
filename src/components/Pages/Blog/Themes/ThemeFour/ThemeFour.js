import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import themeFourStyle from "../../style.module.css"

function ThemeFour({blogData}) {
    const {databaseApi} = useContext(ContextApi)
    return(
        <>
            <div>
                <img src={`${databaseApi}/${blogData.BlogImageOne}`} alt="Blog" className={themeFourStyle.firstImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.firstDescription}</p>
                <img src={`${databaseApi}/${blogData.BlogImageTwo}`} alt="Blog" className={themeFourStyle.secondImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.secondDescription}</p>
                <div>
                    <img src={`${databaseApi}/${blogData.BlogImageThree}`} alt="Blog" className={themeFourStyle.thirdImage} />
                    <img src={`${databaseApi}/${blogData.BlogImageFour}`} alt="Blog" className={themeFourStyle.fourthImage} />
                </div>
                <p className={themeFourStyle.descriptionText}>{blogData.thirdDescription}</p>
            </div>
        </>
    )
}

export default ThemeFour;