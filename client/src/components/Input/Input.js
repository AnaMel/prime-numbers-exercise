import React from 'react';

import './input.css';

const Input = ({ label = 'Please enter an upper limit value!' }) => {
    // TODO: doesn't work
    const onKeyPressValidate = (event) => {
        var charCode = event?.which ? event?.which : event?.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    };

    return (
        <div className="customInput">
            <label htmlFor="valueInput" className="valueInput">
                <input
                    type="texts"
                    id="valueInput"
                    placeholder="&nbsp;"
                    onKeyPress={onKeyPressValidate}
                />
                <div className="label">{label}</div>
            </label>
        </div>
    );
};

export default Input;
