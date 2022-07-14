import React from "react";

function Arrows({ prevElement, nextElement }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevElement}>
                &#10094;
            </span>
            <span className="next" onClick={nextElement}>
                &#10095;
            </span>
        </div>
    )
}

export default Arrows