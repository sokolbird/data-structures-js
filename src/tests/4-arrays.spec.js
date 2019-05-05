const tasks = require('../tasks/4-arrays');

describe('Tasks for arrays', () => {
  describe('placeInOrder', () => {
    it('places strings in order', () => {
      expect(tasks.placeInOrder('is2 Thi1s T4est 3a')).toBe(
        'Thi1s is2 3a T4est'
      );
      expect(tasks.placeInOrder('б2лаго 3людей Н1а')).toBe('Н1а б2лаго 3людей');
    });
  });

  describe('flatten', () => {
    it('flattens array', () => {
      expect(tasks.flatten([1, [2], [3, [[4]]], [5, 6]])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);
      expect(tasks.flatten([1, 2, 3, [4, 5, [6, 7]]])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]);
    });
  });

  describe('useQueue', () => {
    it('correctly queueing', () => {
      expect(tasks.useQueue('EAS*Y*QUE***ST***IO*N***')).toEqual([]);
      expect(tasks.useQueue('FI*RSTI*N*FIR*ST**OU*T******')).toEqual([
        'U',
        'T'
      ]);
    });
  });

  describe('getFreshProducts', () => {
    it('returns fresh products array', () => {
      const products = [
        { name: 'milk', count: 2, expirationDate: '2019/05/05' },
        { name: 'juice', count: 5, expirationDate: '2019/05/06' },
        { name: 'cheese', count: 10, expirationDate: '2019/06/05' },
        { name: 'bread', count: 15, expirationDate: '2019/06/06' }
      ];

      const freshProducts = [
        { name: 'juice', count: 5 },
        { name: 'cheese', count: 10 },
        { name: 'bread', count: 15 }
      ];

      expect(tasks.getFreshProducts(products)).toEqual(freshProducts);
    });
  });

  describe('calculateCart', () => {
    it('returns correct sum for cart 1', () => {
      const items = [
        { name: 'Морковь', amount: 3, price: 3.25 },
        { name: 'Яблоко', amount: 5, price: 4.3 },
        { name: 'Банан', amount: 2, price: 6.75 }
      ];

      expect(tasks.calculateCart(items)).toBe(44.75);
    });

    it('returns correct sum for cart 2', () => {
      const items = [
        { name: 'Молоко', amount: 1, price: 20.0 },
        { name: 'Курица', amount: 2, price: 55.0 },
        { name: 'Яйца', amount: 10, price: 2.2 }
      ];

      expect(tasks.calculateCart(items)).toBe(152);
    });
  });

  describe('isPostCommentedByAll', () => {
    const users = [
      {
        id: 1,
        username: 'steven',
        comments: [{ commentId: 1, postId: 1, comment: 'woah cool bro' }]
      },
      {
        id: 2,
        username: 'don',
        comments: [{ commentId: 3, postId: 1, comment: 'dope' }]
      },
      {
        id: 3,
        username: 'peter',
        comments: [
          { commentId: 4, postId: 1, comment: 'dope' },
          { commentId: 5, postId: 3, comment: 'dope' }
        ]
      }
    ];

    it('determines if the post #1 is commented by all users', () => {
      expect(tasks.isPostCommentedByAll(users, 1)).toBe(true);
    });

    it('determines if the post #3 is commented by all users', () => {
      expect(tasks.isPostCommentedByAll(users, 3)).toBe(false);
    });
  });
});
