import * as LV3 from '../../src/solutions/level03/solutions';
import { ToDo } from '../../src/utils/predef';

describe('Array', () => {
  describe('prependToArray', () => {
    it('1 should be the first element', () => {
      const prepended = LV3.prependToArray(1, [2, 3, 4]);
      expect(prepended[0]).toEqual(1);
    });
  });

  describe('appendToArray', () => {
    it('1 should be the last element', () => {
      const prepended = LV3.appendToArray(1, [2, 3, 4]);
      expect(prepended[prepended.length - 1]).toEqual(1);
    });
  });

  describe('isEmptyArray_Length', () => {
    it('should return true for []', () => {
      const expected = LV3.isEmptyArray_Length([]);
      expect(expected).toEqual(true);
    });

    it('should return false for [1,2,3]', () => {
      const expected = LV3.isEmptyArray_Length([1, 2, 3]);
      expect(expected).toEqual(false);
    });
  });

  describe('isEmptyArray_TS_Pattern', () => {
    it('should return true for []', () => {
      const expected = LV3.isEmptyArray_TS_Pattern([]);
      expect(expected).toEqual(true);
    });

    it('should return false for [1,2,3]', () => {
      const expected = LV3.isEmptyArray_TS_Pattern([1, 2, 3]);
      expect(expected).toEqual(false);
    });
  });

  describe('isEmptyArray', () => {
    it('should return true for []', () => {
      const expected = LV3.isEmptyArray([]);
      expect(expected).toEqual(true);
    });

    it('should return false for [1,2,3]', () => {
      const expected = LV3.isEmptyArray([1, 2, 3]);
      expect(expected).toEqual(false);
    });
  });

  describe('addNumToEach_ECMA', () => {
    it('should return [] for []', () => {
      const expected = LV3.addNumToEach_ECMA(1, []);
      expect(expected).toEqual([]);
    });

    it('should return [2,3,4] for adding 1 to each element in [1,2,3]', () => {
      const expected = LV3.addNumToEach_ECMA(1, [1, 2, 3]);
      expect(expected).toEqual([2, 3, 4]);
    });
  });

  describe('addNumToEach', () => {
    it('should return [] for []', () => {
      const expected = LV3.addNumToEach(1, []);
      expect(expected).toEqual([]);
    });

    it('should return [2,3,4] for adding 1 to each element in [1,2,3]', () => {
      const expected = LV3.addNumToEach(1, [1, 2, 3]);
      expect(expected).toEqual([2, 3, 4]);
    });
  });

  describe('filterEven', () => {
    it('should return [] for []', () => {
      const expected = LV3.filterEven([]);
      expect(expected).toEqual([]);
    });

    it('should return [2] for [1,2,3]', () => {
      const expected = LV3.filterEven([1, 2, 3]);
      expect(expected).toEqual([2]);
    });
  });

  describe('filterEvenFlow', () => {
    it('should return [] for []', () => {
      const expected = LV3.filterEvenFlow([]);
      expect(expected).toEqual([]);
    });

    it('should return [2] for [1,2,3]', () => {
      const expected = LV3.filterEvenFlow([1, 2, 3]);
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
