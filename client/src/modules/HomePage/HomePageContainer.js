import React, { useState } from 'react';
import HomePage from './components/HomePage';
import { getIsUserInputValid } from '../../utils/helpers';
import { URLS } from '../../constants/urls';

const HomePageContainer = () => {
    const [upperLimit, setUpperLimit] = useState(null);
    const [error, setError] = useState('');
    const [medianPrimeNumbers, setMedianPrimeNumbers] = useState([]);

    const _onValidateInput = (value) => {
        const isUserInputValid = getIsUserInputValid(value);

        if (!isUserInputValid) {
            setError('Upper limit must be a whole, positive number. Try again!');
            return false;
        }

        return true;
    };

    const _onSubmit = () => {
        // on submit, validate input is a whole, positive value
        const isValidInput = _onValidateInput(upperLimit);

        if (!isValidInput) {
            return;
        }

        (async () => {
            const rawResponse = await fetch(URLS.generateMedianPrimeNumbers, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ upperLimit: parseInt(upperLimit) }),
            });

            const { result = [] } = await rawResponse.json();
            setMedianPrimeNumbers(result);
        })();
    };

    const _onEdit = (value) => {
        // on edit action, reset error if any
        if (error) {
            setError();
        }

        // on edit action, reset displayed result if any
        if (medianPrimeNumbers?.length) {
            setMedianPrimeNumbers();
        }

        setUpperLimit(value);
    };

    return (
        <HomePage
            medianPrimeNumbers={medianPrimeNumbers}
            error={error}
            onEdit={_onEdit}
            onSubmit={_onSubmit}
        />
    );
};

export default HomePageContainer;
