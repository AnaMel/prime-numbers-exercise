import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';

import './homePage.css';

const HomePage = ({ medianPrimeNumbers = [], error, onEdit = () => {}, onSubmit = () => {} }) => {
    return (
        <div className="homePage">
            <Input onChange={onEdit} />
            <button className="homePage__submitButton" onClick={onSubmit}>
                Send
            </button>
            <div className="homePage__errors">{error}</div>
            {!!medianPrimeNumbers.length && (
                <div className="homePage__medianPrimeNumbers">
                    <div className="homePage__medianPrimeNumbers__label">
                        Generated Median Prime Numbers
                    </div>
                    <div>
                        {medianPrimeNumbers.map((medianPrimeNumber, i) => (
                            <span key={i}>
                                {medianPrimeNumber}
                                {medianPrimeNumbers.length > 1 && !i && ','}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

HomePage.propTypes = {
    medianPrimeNumbers: PropTypes.arrayOf(PropTypes.number),
    error: PropTypes.string,
    onEdit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default HomePage;
