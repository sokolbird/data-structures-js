const tasks = require('../tasks/2-strings');

describe('Tasks for strings', () => {
  describe('parameterize', () => {
    it('parameterizes a string', () => {
      expect(tasks.parameterize('As cool as a cucumber')).toBe(
        'as-cool-as-a-cucumber'
      );
      expect(tasks.parameterize('Head In The Clouds')).toBe(
        'head-in-the-clouds'
      );
      expect(tasks.parameterize('long-term goals')).toBe('long-term-goals');
    });
  });

  describe('formatEmployee', () => {
    it('formats the given employee information', () => {
      expect(tasks.formatEmployee('Vasya', 'Pupkin', 'Developer', 1000)).toBe(
        'Vasya\t|\tPupkin\t|\tDeveloper\t|\t1000$'
      );
      expect(tasks.formatEmployee('Masha', 'Sidorova', 'PM', 990)).toBe(
        'Masha\t|\tSidorova\t|\tPM\t|\t990$'
      );
    });
  });

  describe('notBad', () => {
    it('changes not bad to good', () => {
      expect(tasks.notBad('This dinner is not that bad!')).toBe(
        'This dinner is good!'
      );
      expect(tasks.notBad('This movie is not so bad!')).toBe(
        'This movie is good!'
      );
      expect(tasks.notBad('This dinner is bad!')).toBe('This dinner is bad!');
    });
  });

  describe('emojiCipher', () => {
    it('returns string from emojis char points', () => {
      expect(tasks.emojiCipher('😂', '🙈', '😱')).toBe('128514-128584-128561');
      expect(tasks.emojiCipher('😎', '😤', '😬')).toBe('128526-128548-128556');
    });
  });
});
