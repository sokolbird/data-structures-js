const tasks = require('../tasks/1-numbers');

describe('Tasks for numbers', () => {
  describe('isNatural', () => {
    it('determines whether the value is natural number or not', () => {
      expect(tasks.isNatural('42px')).toBe(false);
      expect(tasks.isNatural(-40)).toBe(false);
      expect(tasks.isNatural('Hello world!')).toBe(false);
      expect(tasks.isNatural(5)).toBe(true);
      expect(tasks.isNatural(0.6)).toBe(false);
      expect(tasks.isNatural(10 / 0)).toBe(false);
    });
  });

  describe('intRoundFiveMultiple', () => {
    it('returns next multiple of five', () => {
      expect(tasks.intRoundFiveMultiple(31)).toBe(35);
      expect(tasks.intRoundFiveMultiple(47)).toBe(50);
      expect(tasks.intRoundFiveMultiple(-13)).toBe(-10);
    });
  });

  describe('degToRad', () => {
    it('converts angle in degrees to radians', () => {
      expect(tasks.degToRad(20)).toBe(0.349);
      expect(tasks.degToRad(-45)).toBe(-0.785);
      expect(tasks.degToRad(85.3)).toBe(1.489);
    });
  });

  describe('addHexNumbers', () => {
    it('sums hex colors', () => {
      expect(tasks.addHexNumbers('aaaaaa', '010101')).toBe('ababab');
      expect(tasks.addHexNumbers('e2e2e2', 'f5f5f5')).toBe('1d8d8d7');
      expect(tasks.addHexNumbers('262626', '6f39a1', '555555')).toBe('eab51c');
    });
  });
});
