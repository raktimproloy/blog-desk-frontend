import React from "react";

function ThemeInputsOne ({themeOnePostItem, setThemeOnePostItem}) {
    return(
        <>
            <div className="py-3">
                <div>
                    <p>First Image:</p>
                    <input type="file" placeholder="Upload first image" className="fileStyle" name="file" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, file: e.target.files[0].name})}} />
                </div>
                <div>
                    <p>First Description:</p>
                    <textarea cols="55" rows="5" className="textareaStyle" name="firstDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, firstDescription: e.target.value})}} ></textarea>
                </div>
            </div>
            <div className="py-3">
                <div>
                    <p>Second Image:</p>
                    <input type="file" placeholder="Upload Second image" className="fileStyle" name="secondImage" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, secondImage: e.target.value})}} />
                </div>
                <div>
                    <p>Second Description:</p>
                    <textarea cols="55" rows="5" placeholder="First Description" className="textareaStyle" name="secondDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, secondDescription: e.target.value})}} ></textarea>
                </div>
            </div>
            <div className="py-3">
                <div>
                    <p>Third Image:</p>
                    <input type="file" placeholder="Upload Third image" className="fileStyle" name="thirdImage" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, thirdImage: e.target.value})}} />
                    <p>Fourth Image:</p>
                    <input type="file" placeholder="Upload Fourth image" className="fileStyle" name="fourthImage" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, fourthImage: e.target.value})}} />
                </div>
                <div>
                    <p>Third Description:</p>
                    <textarea cols="55" rows="5" placeholder="Third Description" className="textareaStyle" name="thirdDescription" onChange={(e) => {setThemeOnePostItem({...themeOnePostItem, thirdDescription: e.target.value})}} ></textarea>
                </div>
            </div>
        </>
    )
}

export default ThemeInputsOne;