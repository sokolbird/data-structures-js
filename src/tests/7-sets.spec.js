const tasks = require('../tasks/7-sets');

describe('Tasks for sets', () => {
  describe('isSubarray', () => {
    it('should correctly determine if there is subarray', () => {
      expect(tasks.isSubarray(new Set([1, 8, 17, 5, 14, 30, 2]), new Set([1, 2, 5, 8]))).toBe(
        true
      );
      expect(
        tasks.isSubarray(
          new Set(['my', 'religion', 'is', 'true', 'love']),
          new Set(['my', 'religion', 'is', 'war'])
        )
      ).toBe(false);
    });
  });

  describe('countUniqueWords', () => {
    it('should count unique words in the text #1', () => {
      const text = `She sells sea shells on the sea shore;
        The shells that she sells are sea shells I'm sure.
        So if she sells sea shells on the sea shore,
        I'm sure that the shells are sea shore shells.`;

      expect(tasks.countUniqueWords(text)).toBe(13);
    });

    it('should count unique words in the text #2', () => {
      const text = `If you can talk with crowds and keep your virtue,
      Or walk with Kings - nor lose the common touch,
      If neither foes nor loving friends can hurt you,
      If all men count with you, but none too much:
      If you can fill the unforgiving minute
      With sixty seconds' worth of distance run,
      Yours is the Earth and everything that's in it,
      And - which is more - you'll be a Man, my son!`;

      expect(tasks.countUniqueWords(text)).toBe(54);
    });
  });
});
