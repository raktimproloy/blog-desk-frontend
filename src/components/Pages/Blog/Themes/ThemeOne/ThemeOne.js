import React, { useContext } from "react";
import ContextApi from "../../../../../ContextApi/ContextApi";
import Image from "../../../../../images/building.jpeg"
import themeOneStyle from "./style.module.css"

function ThemeOne({blogData}) {
    const {databaseApi} = useContext(ContextApi)
    return(
        <>
            <div>
                <img src={`${databaseApi}/${blogData.BlogImageOne}`} alt="Blog" className={themeOneStyle.firstImage} />
                <p>{blogData.firstDescription}</p>
                <img src={`${databaseApi}/${blogData.BlogImageTwo}`} alt="Blog" className={themeOneStyle.secondImage} />
                <p>{blogData.secondDescription}</p>
                <div>
                    <img src={`${databaseApi}/${blogData.BlogImageThree}`} alt="Blog" className={themeOneStyle.thirdImage} />
                    <img src={`${databaseApi}/${blogData.BlogImageFour}`} alt="Blog" className={themeOneStyle.fourthImage} />
                </div>
                <p>{blogData.thirdDescription}</p>
            </div>
        </>
    )
}

export default ThemeOne;