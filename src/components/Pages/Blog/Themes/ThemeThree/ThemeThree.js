import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import themeFourStyle from "../../style.module.css"

function ThemeThree({blogData}) {
    const {databaseApi} = useContext(ContextApi)
    return(
        <>
            <div>
                <img src={`${databaseApi}/${blogData.BlogImageOne}`} alt="Blog" className={themeFourStyle.firstImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.firstDescription}</p>
                
                <img src={`${databaseApi}/${blogData.BlogImageTwo}`} alt="Blog" className={themeFourStyle.secondImage} />
                <p className={themeFourStyle.descriptionText}>{blogData.secondDescription}</p>

                <img src={`${databaseApi}/${blogData.BlogImageThree}`} alt="Blog" className={themeFourStyle.thirdImageBig} />
                <p className={themeFourStyle.descriptionText}>{blogData.thirdDescription}</p>
            </div>
        </>
    )
}

export default ThemeThree;