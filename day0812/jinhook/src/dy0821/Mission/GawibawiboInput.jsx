// GawibawiboInput.jsx

import React from "react";

function GawibawiboInput( {onUserSelect} ) {
    return (
        <div className="input">
            <button onClick={() => onUserSelect('가위')}>가위</button>
            <button onClick={() => onUserSelect('바위')}>바위</button>
            <button onClick={() => onUserSelect('보')}>보</button>
        </div>
    );
}

export default GawibawiboInput;