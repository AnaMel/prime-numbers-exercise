import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ label = 'Please Enter an Upper Limit Value', onChange }) => {
    // TODO: doesn't work
    const onKeyPressValidate = (event) => {
        var charCode = event?.which ? event?.which : event?.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    };

    const _onChange = (event) => {
        const value = event?.target?.value;

        onChange(value);
    };

    return (
        <div className="customInput">
            <label htmlFor="valueInput" className="customInput__label">
                {label}
            </label>
            <input
                type="number"
                id="valueInput"
                placeholder="&nbsp;"
                className="customInput__input"
                // onKeyPress={onKeyPressValidate}
                onChange={_onChange}
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;
