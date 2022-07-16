import React from "react";

function ArrowLeft({ prevElement }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevElement}>
                &#10094;
            </span>
        </div>
    )
}

export default ArrowLeft