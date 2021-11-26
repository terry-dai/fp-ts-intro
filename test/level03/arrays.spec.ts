import * as LV3 from '../../src/solutions/level03/solutions';
import { ToDo } from '../../src/utils/predef';

describe('Array', () => {
  describe('prependToList', () => {
    it('1 should be the first element', () => {
      const prepended = LV3.prependToList(1, [2, 3, 4]);
      expect(prepended[0]).toEqual(1);
    });
  });

  describe('appendToList', () => {
    it('1 should be the last element', () => {
      const prepended = LV3.appendToList(1, [2, 3, 4]);
      expect(prepended[prepended.length - 1]).toEqual(1);
    });
  });

  describe('isEmptyList_Length', () => {
    it('should return true for []', () => {
      const expected = LV3.isEmptyList_Length([]);
      expect(expected).toEqual(true);
    });

    it('should return false for [1,2,3]', () => {
      const expected = LV3.isEmptyList_Length([1,2,3]);
      expect(expected).toEqual(false);
    });
  });


  describe('isEmptyList', () => {
    it('should return true for []', () => {
      const expected = LV3.isEmptyList([]);
      expect(expected).toEqual(true);
    });

    it('should return false for [1,2,3]', () => {
      const expected = LV3.isEmptyList([1,2,3]);
      expect(expected).toEqual(false);
    });
  });


  describe('addNumToEach_ECMA', () => {
    it('should return [] for []', () => {
      const expected = LV3.addNumToEach_ECMA(1, []);
      expect(expected).toEqual([]);
    });

    it('should return [2,3,4] for adding 1 to each element in [1,2,3]', () => {
      const expected = LV3.addNumToEach_ECMA(1, [1,2,3]);
      expect(expected).toEqual([2,3,4]);
    });
  });


  describe('addNumToEach', () => {
    it('should return [] for []', () => {
      const expected = LV3.addNumToEach(1, []);
      expect(expected).toEqual([]);
    });

    it('should return [2,3,4] for adding 1 to each element in [1,2,3]', () => {
      const expected = LV3.addNumToEach(1, [1,2,3]);
      expect(expected).toEqual([2,3,4]);
    });
  });

  describe('filterEven', () => {
    it('should return [] for []', () => {
      const expected = LV3.filterEven([]);
      expect(expected).toEqual([]);
    });

    it('should return [2] for [1,2,3]', () => {
      const expected = LV3.filterEven([1,2,3]);
      expect(expected).toEqual([2]);
    });
  });

  describe('filterEvenFlow', () => {
    it('should return [] for []', () => {
      const expected = LV3.filterEvenFlow([]);
      expect(expected).toEqual([]);
    });

    it('should return [2] for [1,2,3]', () => {
      const expected = LV3.filterEvenFlow([1,2,3]);
      expect(expected).toEqual([2]);
    });
  });

  describe('product', () => {
    it('should return 1 for []', () => {
      const expected = LV3.product([]);
      expect(expected).toEqual(1);
    });

    it('should return 30 for [2, 5, 3]', () => {
      const expected = LV3.product([2, 5, 3]);
      expect(expected).toEqual(30);
    });
  });


  describe('min', () => {
    it('should return Infinity for []', () => {
      const expected = LV3.min([]);
      expect(expected).toEqual(Infinity);
    });

    it('should return 2 for [2, 5, 3]', () => {
      const expected = LV3.min([2, 5, 3]);
      expect(expected).toEqual(2);
    });
  });
});
