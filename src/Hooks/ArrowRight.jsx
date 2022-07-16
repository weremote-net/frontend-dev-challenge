import React from "react";

function ArrowRight({ nextElement }) {
    return (
        <div className="arrows">
            <span className="next" onClick={nextElement}>
                &#10095;
            </span>
        </div>
    )
}

export default ArrowRight