import React from "react";

function ThemeInputsTwo ({themeOnePostItem, setThemeOnePostItem}) {
    const photoChange = (e) => {
        setThemeOnePostItem({...themeOnePostItem, [e.target.name]: e.target.files[0]})
    }
    return(
        <>
            <div className="py-3">
                <div>
                    <p>First Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageOne" onChange={photoChange} />
                </div>
                <div>
                    <p>First Description:</p>
                    <textarea cols="55" rows="5" className="textareaStyle" name="firstDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, firstDescription: e.target.value})}} value={themeOnePostItem.firstDescription || ""} ></textarea>
                </div>
            </div>
            <div>
                <div>
                    <p>Second Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageTwo" onChange={photoChange}/>
                </div>
                <div>
                    <p>Second Description:</p>
                    <textarea cols="55" rows="5" placeholder="First Description" className="textareaStyle" name="secondDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, secondDescription: e.target.value})}} value={themeOnePostItem.secondDescription || ""} ></textarea>
                </div>
            </div>
        </>
    )
}

export default ThemeInputsTwo;