const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const helpers = require('./utils/helpers');

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.post('/generate_median_prime_numbers', jsonParser, (req = {}, res) => {
    const { body = {} } = req;
    const { upperLimit } = body;

    if (!upperLimit) {
        res.status(400).json('No valid upper limit provided.');
        return;
    }

    // in case this endpoint is ever exposed via public api
    // we want to perform the same data validation which is currently handled by UI (e.g. non-numerical check)
    if (!helpers.getIsUpperLimitNumerical(upperLimit)) {
        res.status(400).json('Upper limit contains non-numerical values.');
        return;
    }

    const primeNumbers = helpers.getPrimeNumbersByUpperLimit(upperLimit);
    const medianValues = helpers.getMedianValues(primeNumbers);

    res.json({ result: medianValues });
});
