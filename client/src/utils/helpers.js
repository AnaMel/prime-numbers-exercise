// TODO:
// write tests for each function

const NUM_ONLY_REGEX_PATTERN = '^[0-9]*$';

// validateInput uses regex to validate:
// 1. input value is integer
// 2. input value is larger than 0
function getIsUserInputValid(value) {
    const regexPattern = new RegExp(NUM_ONLY_REGEX_PATTERN);

    return regexPattern.test(value);
}

// getPrimeNumbersByUpperLimit ...
function getPrimeNumbersByUpperLimit(n) {
    let primeNumbers = Array.from({ length: n + 1 }, (_, i) => {
        if (!i || i === 1) {
            return false;
        }

        return true;
    });

    // mark all the numbers which are divisible by i as false (ignore i itself)
    // and are greater than or equal to the square of it
    // start at 2 bc ...
    for (let i = 2; i ** 2 <= n; i++) {
        if (primeNumbers[i] === true) {
            for (let j = i ** 2; j <= n; j += i) {
                primeNumbers[j] = false;
            }
        }
    }

    let result = primeNumbers
        .map((primeNumber, i) => {
            if (!primeNumber) {
                return primeNumber;
            }

            return i;
        })
        .filter(Boolean);

    return result;
}

// getMedianValues ...
function getMedianValues() {}

export { getIsUserInputValid, getPrimeNumbersByUpperLimit, getMedianValues };
