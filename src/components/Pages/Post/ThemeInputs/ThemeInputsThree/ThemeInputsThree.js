import React from "react";

function ThemeInputsThree ({themeOnePostItem, setThemeOnePostItem}) {
    const photoChange = (e) => {
        setThemeOnePostItem({...themeOnePostItem, [e.target.name]: e.target.files[0]})
    }
    return(
        <>
            <div className="py-3">
                <div>
                    <p>First Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageOne" onChange={photoChange} value={themeOnePostItem.BlogImageOne || ""} />
                </div>
                <div>
                    <p>First Description:</p>
                    <textarea cols="55" rows="5" className="textareaStyle" name="firstDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, firstDescription: e.target.value})}} value={themeOnePostItem.firstDescription || ""} ></textarea>
                </div>
            </div>
            <div>
                <div>
                    <p>Second Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageTwo" onChange={photoChange} value={themeOnePostItem.BlogImageTwo || ""} />
                </div>
                <div>
                    <p>Second Description:</p>
                    <textarea cols="55" rows="5" placeholder="First Description" className="textareaStyle" name="secondDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, secondDescription: e.target.value})}} value={themeOnePostItem.secondDescription || ""} ></textarea>
                </div>
            </div>
            <div>
                <div>
                    <p>Third Image</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="BlogImageThree" onChange={photoChange} value={themeOnePostItem.BlogImageThree || ""} />
                </div>
                <div>
                    <p>Third Description:</p>
                    <textarea cols="55" rows="5" placeholder="Third Description" className="textareaStyle" name="thirdDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, thirdDescription: e.target.value})}} value={themeOnePostItem.thirdDescription || ""} ></textarea>
                </div>
            </div>
        </>
    )
}

export default ThemeInputsThree;