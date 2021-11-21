module.exports = {
    getIsUpperLimitNumerical: function (value) {
        const NUM_ONLY_REGEX_PATTERN = '^[0-9]*$';
        const regexPattern = new RegExp(NUM_ONLY_REGEX_PATTERN);

        return regexPattern.test(value);
    },
    getPrimeNumbersByUpperLimit: function (n) {
        let primeNumbers = Array.from({ length: n++ }, (_, i) => {
            if (!i || i === 1) {
                return undefined;
            }

            return i;
        });

        // mark all the numbers which are divisible by i as false (ignore i itself)
        // and are greater than or equal to the square of it
        // start at 2 bc ...
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
