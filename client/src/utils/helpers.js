const NUM_ONLY_REGEX_PATTERN = '^[0-9]*$';

// validateInput uses regex to validate:
// 1. input value is integer
// 2. input value is larger than 0
function getIsUserInputValid(value) {
    const regexPattern = new RegExp(NUM_ONLY_REGEX_PATTERN);

    return regexPattern.test(value);
}

export { getIsUserInputValid };
