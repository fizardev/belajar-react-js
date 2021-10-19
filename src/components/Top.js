import React from "react";

const Top = () => {
    const handlePesan = (value, e) => {
        e.preventDefault();
        alert('Clicked');
        alert(value);
    }
    return (
        <a href="google.com" onClick={(e) => handlePesan("Pesan kedua", e)}>Click Here..</a>
    )
} 

export default Top;