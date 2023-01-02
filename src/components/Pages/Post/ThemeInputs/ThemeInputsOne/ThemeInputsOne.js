import React from "react";

function ThemeInputsOne () {
    return(
        <>
            <div>
                <p>First Image:</p>
                <input type="file" placeholder="Upload first image" className="fileStyle" />
            </div>
            <div>
                <p>First Description:</p>
                <textarea cols="55" rows="5" value="First Description" className="textareaStyle" ></textarea>
            </div>
            <div>
                <p>Second Image:</p>
                <input type="file" placeholder="Upload Second image" className="fileStyle" />
            </div>
            <div>
                <p>Second Description:</p>
                <textarea cols="55" rows="5" placeholder="First Description" className="textareaStyle" ></textarea>
            </div>
            <div>
                <p>Third Image:</p>
                <input type="file" placeholder="Upload Third image" className="fileStyle" />
                <p>Fourth Image:</p>
                <input type="file" placeholder="Upload Fourth image" className="fileStyle" />
            </div>
            <div>
                <p>Third Description:</p>
                <textarea cols="55" rows="5" placeholder="Third Description" className="textareaStyle" ></textarea>
            </div>
            <div className="text-center mt-3">
                <span className="bgColorLeftToRight py-3">Post Blog</span>
            </div>
        </>
    )
}

export default ThemeInputsOne;