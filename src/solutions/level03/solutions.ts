import { ToDo, assertNever } from '../../utils/predef';

/**
 * prependToArray(1, [2, 3, 4])
 * > [1, 2, 3, 4]
 *
 * Hint:
 *  - Spread Operator
 *    return [x, ...xs];
 *  - Array.concat
 *    return [x].concat(xs);
 */
export const prependToArray: <A>(x: A, xs: Array<A>) => Array<A> = (x, xs) => {
  return [x, ...xs];
};

/**
 * appendToArray(1, [2, 3, 4]))
 * > [2, 3, 4, 1]
 * Hint:
 *  - Spread Operator
 *    return [...xs, x];
 *  - Array.concat
 *    return xs.concat(x);
 *  - Array.push
 *    xs.push(x);
 *    return xs;
 */
export const appendToArray: <A>(x: A, xs: Array<A>) => Array<A> = (x, xs) => {
  return [...xs, x];
};

/**
 * You can use Array.length to know whether an instance is empty or not.
 *
 * You can also use spread operator like what we have done previously and then test if the there is a head.
 */

export const isEmptyArray_Length: <A>(xs: Array<A>) => boolean = (xs) => {
  return xs.length == 0;
};

export const isEmptyArray: <A>(xs: Array<A>) => boolean = (xs) => {
  const [head, ..._] = xs;
  return !head;
};

import { match } from 'ts-pattern';
export const isEmptyArray_TS_Pattern: <A>(xs: Array<A>) => boolean = (xs) => {
  return match(xs)
    .with([], () => true)
    .otherwise(() => false);
};

/**
 * showArraySize([1, 2, 3])
 * > "This is a array of size 3"
 *
 * showArraySize(["ABC"])
 * > "This is a array of size 1"
 *
 * showArraySize([])
 * > "This is an empty array"
 *
 * Hint: Use pattern matching, string interpolation and length
 */
export const showArraySize: <A>(xs: Array<A>) => String = (xs) => {
  return match(xs)
    .with([], () => 'This is an empty array')
    .otherwise(() => `This is an array of size ${xs.length}`);
};

/**
 * Mapping a function over an array
 *
 * This is typically what you want if the initial array and the resulting array
 * are of the same size.
 *
 * addNumToEach(10, [1, 2, 3])
 * > [11, 12, 13]
 *
 * Hint: Use .map
 **/
export const addNumToEach_ECMA: (
  num: number,
  nums: Array<number>
) => Array<number> = (num, nums) => {
  return nums.map((x) => x + num);
};

import * as A from 'fp-ts/lib/Array';
import { flow, pipe } from 'fp-ts/lib/function';
export const addNumToEach: (
  num: number,
  nums: Array<number>
) => Array<number> = (num, nums) => {
  return A.map((x: number) => x + num)(nums);
};

/**
 * Filter an array
 *
 * This is typically what you want if the size of the resulting array is <= that of the initial.
 *
 * Hint: Use .filter and '%' for mod operator
 */
export const filterEven: (nums: Array<number>) => Array<number> = (nums) => {
  return A.filter((x: number) => x % 2 === 0)(nums);
};

export const filterEvenPipe: (nums: Array<number>) => Array<number> = (
  nums
) => {
  return pipe(
    nums,
    A.filter((x: number) => x % 2 === 0)
  );
};
export const filterEvenFlow: (nums: Array<number>) => Array<number> = flow(
  A.filter((x: number) => x % 2 === 0)
);

/**
 * Folds
 *
 * A fold is an operation over a data structure to yield a summary value.
 *
 * The next 3 exercises are to practise folding.
 *
 * Examples: sum, product, min, max
 *
 * Hint: Use .foldLeft
 */

/**
 * > product([2, 5, 3])
 * > 30
 *
 * https://en.wikipedia.org/wiki/Empty_product
 * > product([])
 * > 1
 *
 * Hint: Use .foldLeft
 */
export const product: (nums: Array<number>) => number = flow(
  A.foldLeft(
    () => 1,
    (head: number, tail: Array<number>) => head * product(tail)
  )
);

/**
 * min([4, 6, 1])
 * > 1
 *
 * min([])
 * > Int.MinValue
 *
 * Hint: Use pattern matching and .foldLeft
 **/
export const min: (nums: Array<number>) => number = flow(
  A.foldLeft(
    () => Infinity,
    (head: number, tail: Array<number>) => {
      const t = min(tail);
      return head < t ? head : t;
    }
  )
);
