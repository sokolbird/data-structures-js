const tasks = require('../tasks/6-maps');

describe('Tasks for maps', () => {
  describe('getEnRusDictionary', () => {
    it('returns map with correct en-rus dictionary', () => {
      const pairsList = [
        { table: 'стол' },
        { table: 'таблица' },
        { fish: 'рыба' },
        { blue: 'синий' },
        { blue: 'грустный' },
        { custom: 'традиция' },
        { custom: 'индивидуально сделанный' },
        { map: 'карта' }
      ];

      const expectedMap = new Map([
        ['table', ['стол', 'таблица']],
        ['fish', ['рыба']],
        ['blue', ['синий', 'грустный']],
        ['custom', ['традиция', 'индивидуально сделанный']],
        ['map', ['карта']]
      ]);

      const actual = tasks.getEnRusDictionary(pairsList);

      expect(actual).toBeInstanceOf(Map);
      expect(actual).toEqual(expectedMap);
    });

    it('returns map with correct en-rus dictionary', () => {
      const pairsList = [
        { object: 'объект' },
        { object: 'возражать' },
        { apple: 'яблоко' },
        { desert: 'десерт' },
        { desert: 'покидать' },
        { lead: 'свинец' },
        { lead: 'лидерство' },
        { pen: 'ручка' }
      ];

      const expectedMap = new Map([
        ['object', ['объект', 'возражать']],
        ['apple', ['яблоко']],
        ['desert', ['десерт', 'покидать']],
        ['lead', ['свинец', 'лидерство']],
        ['pen', ['ручка']]
      ]);

      const actual = tasks.getEnRusDictionary(pairsList);

      expect(actual).toBeInstanceOf(Map);
      expect(actual).toEqual(expectedMap);
    });
  });

  describe('prettyPrintAverageTemperature', () => {
    it('returns correct array of strings', () => {
      const citiesMap = new Map([
        [{ country: 'Ukraine', city: 'Kharkiv' }, [15, 13, 19, 10]],
        [{ country: 'Ukraine', city: 'Kyiv' }, [13, 19, 12, 9]],
        [{ country: 'Ukraine', city: 'Lviv' }, [9, 8, 7, 10]]
      ]);

      const expectedArray = [
        'Average temperature in Ukraine, Kharkiv: 14.3°C',
        'Average temperature in Ukraine, Kyiv: 13.3°C',
        'Average temperature in Ukraine, Lviv: 8.5°C'
      ];

      expect(tasks.prettyPrintEntries(citiesMap)).toEqual(expectedArray);
    });

    it('returns another correct array of strings', () => {
      const citiesMap = new Map([
        [{ country: 'USA', city: 'New York' }, [21, 20, 15, 22]],
        [{ country: 'USA', city: 'Chicago' }, [14, 12, 18, 15]],
        [{ country: 'Usa', city: 'Washington DC' }, [7, 8, 10, 5]]
      ]);

      const expectedArray = [
        'Average temperature in USA, New York: 19.5°C',
        'Average temperature in USA, Chicago: 14.8°C',
        'Average temperature in USA, Washington DC: 7.5°C'
      ];

      expect(tasks.prettyPrintEntries(citiesMap)).toEqual(expectedArray);
    });
  });
});
