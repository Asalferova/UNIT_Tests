const {evenOddNumber} = require('./threeHw');
const {numberInInterval} = require('./threeHw');


describe('evenOddNumber', () => {
    test('should return true for even numbers', () => {
      expect(evenOddNumber(2)).toBe(true);
      expect(evenOddNumber(10)).toBe(true);
      expect(evenOddNumber(-4)).toBe(true);
    });
  
    test('should return false for odd numbers', () => {
      expect(evenOddNumber(3)).toBe(false);
      expect(evenOddNumber(15)).toBe(false);
      expect(evenOddNumber(-7)).toBe(false);
    });
  
    test('should return true for zero', () => {
      expect(evenOddNumber(0)).toBe(true);
    });
  
    test('should return false for non-numeric inputs', () => {
      expect(evenOddNumber('abc')).toBe(false);
      expect(evenOddNumber(undefined)).toBe(false);
    });
  });


  describe('numberInInterval', () => {
    test('should return true if number is in interval (25, 100)', () => {
      expect(numberInInterval(30)).toBe(true);
      expect(numberInInterval(75)).toBe(true);
      expect(numberInInterval(99)).toBe(true);
    });
  
    test('should return false if number is outside of interval (25, 100)', () => {
      expect(numberInInterval(10)).toBe(false);
      expect(numberInInterval(24)).toBe(false);
      expect(numberInInterval(101)).toBe(false);
    });
  });



