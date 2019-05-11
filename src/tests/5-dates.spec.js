const tasks = require('../tasks/5-dates');

describe('Tasks for dates', () => {
  describe('timeTravel', () => {
    it('should return \'понедельник\' for 4/21/2018', () => {
      const dateString = '4/21/2018';

      expect(tasks.timeTravel(dateString)).toBe('понедельник');
    });

    it('should return \'суббота\' for 02/15/2007', () => {
      const dateString = '02/15/2007';

      expect(tasks.timeTravel(dateString)).toBe('суббота');
    });

    it('should return \'пятница\' for 03/10/2033', () => {
      const dateString = '03/10/2033';

      expect(tasks.timeTravel(dateString)).toBe('пятница');
    });
  });

  describe('unluckyDays', () => {
    it('should count 3 for 2015', () => {
      expect(tasks.unluckyDays(2015)).toBe(3);
    });

    it('should count 1 for 1986', () => {
      expect(tasks.unluckyDays(1986)).toBe(1);
    });
    
    it('should count 2 for 2017', () => {
      expect(tasks.unluckyDays(2017)).toBe(2);
    });
  });

  describe('weekendEndingEmployees', () => {
    it('returns employees who\'s contract ends in weekend', () => {
      const employeeList = [
        {
          surname: 'Bond',
          startDate: new Date('2018/01/19 20:22:15'),
          yearsAmount: 5
        },
        {
          surname: 'Pupkin',
          startDate: new Date('2019/05/10 15:07:20'),
          yearsAmount: 1
        },
        {
          surname: 'Smith',
          startDate: new Date('2019/07/22 13:20:15'),
          yearsAmount: 4
        }
      ];

      const employeeListFinal = [
        {
          surname: 'Pupkin',
          startDate: new Date('2019/05/10 15:07:20'),
          yearsAmount: 1
        },
        {
          surname: 'Smith',
          startDate: new Date('2019/07/22 13:20:15'),
          yearsAmount: 4
        }
      ];

      expect(tasks.weekendEndingEmployees(employeeList)).toEqual(
        employeeListFinal
      );
    });
  });

  describe('formatDate', () => {
    it('formats date according to current datetime', () => {
      expect(tasks.formatDate(new Date() - 1)).toBe('just now');
      expect(tasks.formatDate(new Date(new Date - 40 * 1000))).toBe('40 sec. ago');
      expect(tasks.formatDate(new Date(new Date - 10 * 60 * 1000))).toBe('10 min. ago');
      expect(tasks.formatDate(new Date('2018/07/22 13:20:15'))).toBe('22.07.2018 13:20');
    });
  });
});
