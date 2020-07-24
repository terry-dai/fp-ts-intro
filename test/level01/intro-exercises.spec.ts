import * as LV1 from '../../src/level01/intro-exercises';

describe('IntroExercises', () => {
  describe('add functions', () => {
    describe('add', () => {
      it('1+2 is 3', () => {
        expect(LV1.add(1, 2)).toEqual(3);
      });

      it('5 + 7 is 12', () => {
        expect(LV1.add(5, 7)).toEqual(12);
      });
    });

    describe('addCurried', () => {
      it('1+2 is 3', () => {
        expect(LV1.addCurried(1)(2)).toEqual(3);
      });

      it('5 + 7 is 12', () => {
        expect(LV1.addCurried(5)(7)).toEqual(12);
      });
    });

    describe('add5', () => {
      it('5 + 4 is 5', () => {
        expect(LV1.add5(4)).toEqual(9);
      });

      it('10 + 5 is 15', () => {
        expect(LV1.add5(10)).toEqual(15);
      });
    });
  });

  describe('Tuples', () => {
    describe('pair', () => {
      it('Jimmy and 25', () => {
        expect(LV1.pair('Jimmy', 25)).toEqual(['Jimmy', 25]);
      });

      it('Sammy and 30', () => {
        expect(LV1.pair('Sammy', 30)).toEqual(['Sammy', 30]);
      });
    });

    describe('first', () => {
      it('first of (Jimmy, 25) is Jimmy', () => {
        expect(LV1.first(['Jimmy', 25])).toEqual('Jimmy');
      });
      it('first of (Sammy, 30) is Sammy', () => {
        expect(LV1.first(['Sammy', 30])).toEqual('Sammy');
      });
    });

    describe('second', () => {
      it('second of (Jimmy, 25) is 25', () => {
        expect(LV1.first(['Jimmy', 25])).toEqual('Jimmy');
      });

      it('second of (Sammy, 30) is 30', () => {
        expect(LV1.first(['Sammy', 30])).toEqual('Sammy');
      });
    });
  });
});
