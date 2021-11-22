const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const helpers = require('./utils/helpers');

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// POST /generate_median_prime_numbers
// generate_median_prime_numbers is designed to return median indexed values
// selected from an array of prime numbers generated based on the provided upper limit
//
// Expected Request Body
// { upperLimit: 10 }, where upperLimit is a whole, positive number
// if upperLimit is not provided or doesn't follow the expected format
// Status 400 (Bad Request) will be returned to the client
app.post('/generate_median_prime_numbers', jsonParser, (req = {}, res) => {
    const { body = {} } = req;
    const { upperLimit } = body;

    // in case this endpoint is ever exposed via public api
    // we want to perform the same data validation which is currently handled by UI
    // (e.g. whole, positive and numerical check)
    if (!upperLimit) {
        res.status(400).json({ errorMsg: 'No valid upper limit provided.' });
        return;
    }

    if (!helpers.getIsUpperLimitNumerical(upperLimit)) {
        res.status(400).json({ errorMsg: 'Upper limit contains non-numerical values.' });
        return;
    }

    // generate array of prime numbers based on supplied upper limit value
    const primeNumbers = helpers.getPrimeNumbersByUpperLimit(upperLimit);
    // find median indexed values
    const medianValues = helpers.getMedianValues(primeNumbers);

    res.json({ result: medianValues });
});
