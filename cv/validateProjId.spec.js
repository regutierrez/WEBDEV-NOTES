const validateProjId = require('./validateProjId')

describe('Validate Project Id', () => {
    test('accepts correct format', () => {
        expect(validateProjId('12345-678')).toBe(true);
    });
    test('accepts correct format', () => {
        expect(validateProjId('01001-101')).toBe(true);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('12345678')).toBe(false);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('123456-789')).toBe(false);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('1234-678')).toBe(false);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('12345-4444')).toBe(false);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('12345-44')).toBe(false);
    });
    test('rejects invalid format', () => {
        expect(validateProjId('12345-44')).toBe(false);
    });
});