import React from "react";

function ThemeInputsOne ({themeOnePostItem, setThemeOnePostItem}) {
    const photoChange = (e) => {
        setThemeOnePostItem({...themeOnePostItem, [e.target.name]: e.target.files[0]})
    }
    return(
        <>
            <div className="py-3">
                <div>
                    <p>First Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageOne" onChange={photoChange} onClick={(e) => console.log(e.target.files[0])} />
                </div>
                <div>
                    <p>First Description:</p>
                    <textarea cols="55" rows="5" className="textareaStyle" name="firstDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, firstDescription: e.target.value})}} value={themeOnePostItem.firstDescription || ""} ></textarea>
                </div>
            </div>
        </>
    )
}

export default ThemeInputsOne;