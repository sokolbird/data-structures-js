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

  describe('removePassword', () => {
    it('removes password in user object #1', () => {
      const user = {
        password: 'Password!',
        id: 100,
        name: 'Howard Moon'
      };

      const noPassword = {
        id: 100,
        name: 'Howard Moon'
      };

      expect(tasks.removePassword(user)).toEqual(noPassword);
    });

    it('removes password in user object #2', () => {
      const user = {
        id: 4,
        name: 'Patricia Lebsack',
        password: '123456',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
        website: 'kale.biz'
      };

      const noPassword = {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
        website: 'kale.biz'
      };

      expect(tasks.removePassword(user)).toEqual(noPassword);
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
