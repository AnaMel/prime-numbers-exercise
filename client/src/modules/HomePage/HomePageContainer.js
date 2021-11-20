import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import { getIsUserInputValid } from '../../utils/helpers';

const HomePageContainer = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const _onValidateInput = (value) => {
        const isUserInputValid = getIsUserInputValid(value);

        // TODO: doesn't work
        if (!isUserInputValid) {
            setError('Input contains non-numerical values. Try again!');
            return false;
        }

        return true;
    };

    const _onSubmit = (event) => {
        // const value = event?.target?.value;

        // const isValidInput = _onValidateInput(value);
        // if (!isValidInput) {
        //     return;
        // }

        fetch('/api')
            .then((response) => response.json())
            .then((data) => {
                setData(data?.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="HomePageContainer">
            <header className="HomePageContainer-header">
                <HomePage data={data} error={error} onSubmit={_onSubmit} />
            </header>
        </div>
    );
};

export default HomePageContainer;
