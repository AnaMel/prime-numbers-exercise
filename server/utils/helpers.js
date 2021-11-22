module.exports = {
    getIsUpperLimitNumerical: function (value) {
        const NUM_ONLY_REGEX_PATTERN = '^[0-9]*$';
        const regexPattern = new RegExp(NUM_ONLY_REGEX_PATTERN);

        return regexPattern.test(value);
    },
    getPrimeNumbersByUpperLimit: function (n) {
        let primeNumbers = Array.from({ length: n++ }, (_, i) => {
            // pre-mark 0 and 1st elements of array as undefined
            // absence of the value indicates that the value at the index is not a prime number
            if (!i || i === 1) {
                return undefined;
            }

            return i;
        });

        // mark all the numbers which are divisible by i as undefined (ignore i itself)
        // and are greater than or equal to the square of it
        for (let i = 2; i ** 2 <= n; i++) {
            if (!!primeNumbers[i]) {
                for (let j = i ** 2; j <= n; j += i) {
                    primeNumbers[j] = undefined;
                }
            }
        }

        return primeNumbers.filter(Boolean);
    },
    getMedianValues: function (values) {
        const countOfValues = values.length;
        if (!countOfValues) {
            return [];
        }

        values.sort((a, b) => a - b);

        const medianIndex = Math.floor(countOfValues / 2);

        // if odd count, return value
        if (countOfValues % 2) {
            return [values[medianIndex]];
        }

        // if even count, return two values 1. at medianIndex and 2. medianIndex-1
        return [values[medianIndex - 1], values[medianIndex]];
    },
};
