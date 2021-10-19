import React from "react";

const Top = () => {
    const handlePesan = () => {
        alert('Clicked');
    }
    return (
        <a href="#" onClick={handlePesan}>Click Here..</a>
    )
} 

export default Top;