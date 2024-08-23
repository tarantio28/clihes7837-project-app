import React, { useState } from 'react';

function TextField({ onEnter }) {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const handleInputChange = (event) => {
        const sanitizedValue = event.target.value.replace(/[^a-zA-Z0-9 ]/g, ''); // Sanitize input
        setInputValue(sanitizedValue);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setDisplayValue(inputValue);
            if (onEnter) {
                onEnter(inputValue);
            }
        }
    };

    return (
        <div>
            <label htmlFor="textField">Enter Text:</label>
            <input
                type="text"
                id="textField"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <div>Entered Text: {displayValue}</div>
        </div>
    );
}

export default TextField;

