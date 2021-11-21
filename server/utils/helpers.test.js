const {
    getIsUpperLimitNumerical,
    getPrimeNumbersByUpperLimit,
    getMedianValues,
} = require('./helpers');

describe('Server helper functions', () => {
    test('getIsUpperLimitNumerical should validate user input does not contain non-numerical characters', () => {
        expect.extend({
            toEqualWithCustomErrorMessage(received, expected, errorMsg) {
                const pass = received === expected;

                const result = {
                    pass,
                    message: () => errorMsg,
                };
                return result;
            },
        });

        const tests = [
            {
                id: 1,
                description: 'User input is a string containing whole, positive number',
                value: '123',
                expected: true,
            },
            {
                id: 2,
                description: 'User input is a string containing whole, negative number',
                value: '-123',
                expected: false,
            },
            {
                id: 3,
                description: 'User input is undefined',
                value: undefined,
                expected: false,
            },
            {
                id: 4,
                description: 'User input is null',
                value: null,
                expected: false,
            },
            {
                id: 5,
                description: 'User input is a string containing whole, positive number',
                value: '123ABCD',
                expected: false,
            },
            {
                id: 6,
                description: 'User input is a string containing non-numerical characters',
                value: 'ABCD',
                expected: false,
            },
            {
                id: 7,
                description: 'User input is a whole, positive number',
                value: 123,
                expected: true,
            },
            {
                id: 7,
                description: 'User input is a positive number with a floating point',
                value: 123.5,
                expected: false,
            },
            {
                id: 8,
                description: 'User input is a whole, negative number',
                value: -123,
                expected: false,
            },
        ];

        tests.forEach((test = {}) => {
            expect(getIsUpperLimitNumerical(test.value)).toEqualWithCustomErrorMessage(
                test.expected,
                `Failed test case ${test.id}: ${test.description}`
            );
        });
    });

    test('getPrimeNumbersByUpperLimit should return array of prime numbers less or equal to provided upper limit', () => {
        const tests = [
            {
                id: 1,
                description: 'Upper limit is 10',
                value: 10,
                expected: [2, 3, 5, 7],
            },
            {
                id: 2,
                description: 'Upper limit is 0',
                value: 0,
                expected: [],
            },
            {
                id: 3,
                description: 'Upper limit is 1',
                value: 1,
                expected: [],
            },
            {
                id: 4,
                description: 'Upper limit is a negative number',
                value: -10,
                expected: [],
            },
        ];

        tests.forEach((test = {}) => {
            expect(getPrimeNumbersByUpperLimit(test.value).sort()).toEqual(test.expected.sort());
        });
    });

    test('getMedianValues should return array of median values of the provided array', () => {
        const tests = [
            {
                id: 1,
                description: 'Input contains array of even length',
                value: [2, 3, 5, 7],
                expected: [3, 5],
            },
            {
                id: 2,
                description: 'Input contains array of odd length',
                value: [2, 3, 4, 5, 7],
                expected: [4],
            },
            {
                id: 3,
                description: 'Input is an empty array',
                value: [],
                expected: [],
            },
            {
                id: 4,
                description: 'Input contains array of even length of non-numeric data type',
                value: ['a', 'b', 'c', 'd'],
                expected: ['b', 'c'],
            },
        ];

        tests.forEach((test = {}) => {
            expect(getMedianValues(test.value).sort()).toEqual(test.expected.sort());
        });
    });
});
