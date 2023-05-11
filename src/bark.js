import React, { useState } from 'react'

export default function Bark() {
    const [showbark, setBark] = useState(false);

    const handleButtonClick = () => {
        setBark(!showbark);
    };
    return (
        <div>
            <button onClick={handleButtonClick}>Bark</button>
            {showbark && <h4>bark</h4>}
        </div>
    )
}
