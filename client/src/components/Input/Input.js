import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ label = 'Please Enter an Upper Limit Value', onChange }) => {
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
