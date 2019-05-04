const tasks = require('../tasks/3-objects');

describe('Tasks for objects', () => {
  describe('objectInverse', () => {
    it('inverses an object', () => {
      expect(
        tasks.objectInverse({
          red: '#FF0000',
          green: '#00FF00',
          white: '#FFFFFF'
        })
      ).toEqual({ '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' });
      expect(
        tasks.objectInverse({
          city: 'Kharkiv',
          country: 'Japan',
          town: 'Merefa',
          metropolis: 'New York'
        })
      ).toEqual({
        Kharkiv: 'city',
        Japan: 'country',
        Merefa: 'town',
        'New York': 'metropolis'
      });
    });
  });

  describe('provideConfig', () => {
    it('provides json to js object', () => {
      expect(
        tasks.provideConfig(
          '{"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}'
        )
      ).toEqual({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      });
      expect(
        tasks.provideConfig(
          '{"albumId": 1, "id": 1, "title": "accusamus beatae ad facilis cum similique qui sunt", "url": "https://via.placeholder.com/600/92c952", "thumbnailUrl": "https://via.placeholder.com/150/92c952"}'
        )
      ).toEqual({
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952'
      });
    });
  });

  describe('numericPropsProduct', () => {
    it('counts numeric props product', () => {
      const obj = {
        almostNotNumber: 5,
        theSameThing: 9,
        probablyString: 'hello',
        test: '98'
      };

      expect(tasks.numericPropsProduct(obj)).toBe(45);
    });
  });

  describe('clone', () => {
    it('creates independent copy', () => {
      const obj = {
        testProp1: 'one',
        testProp2: 'two',
        testProp3: 'three'
      };

      const objCopy = tasks.clone(obj);
      objCopy.testProp1 = 'changed';
      objCopy.newProp = 'newProp';

      expect(obj).not.toHaveProperty('newProp');
      expect(obj).toHaveProperty('testProp1', 'one');
    });
  });
});
