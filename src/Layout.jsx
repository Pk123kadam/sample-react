import React, { useState, useLayoutEffect, useEffect } from 'react';

function Layout() {
    const [bgColor, setBgColor] = useState('red');

    const handleButtonClick = () => {
        // Change the background color when the button is clicked
        setBgColor('lightblue');
    };
    // Use useLayoutEffect to update the background color immediately after a state change
    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
        // Clean up the effect by resetting the background color when the component unmounts
        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, [bgColor]);

    return (
        <div>
            <h1>Background Color Changer</h1>
            <button onClick={handleButtonClick}>Change Background Color</button>
        </div>
    );
}

export default Layout;
