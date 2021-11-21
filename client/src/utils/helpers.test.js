import { getIsUserInputValid } from './helpers';

describe('Client helper functions', () => {
    test('getIsUserInputValid should validate user input does not contain non-numerical characters', () => {
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
                expected: true,
            },
        ];

        tests.forEach((test = {}) => {
            expect(getIsUserInputValid(test.value)).toEqualWithCustomErrorMessage(
                test.expected,
                `Failed test case ${test.id}: ${test.description}`
            );
        });
    });
});
