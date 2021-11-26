import { ToDo, assertNever } from '../utils/predef';

const array1: number[] = [1, 2, 3];
const array2: Array<number> = [1, 2, 3];

/**
 * These exercises will teach you how to work with Array type and using fp-ts
 * At the end of these exercises, you should have a good intuition on when to use `map`, `filter` or `fold`.
 */

/**
 * prependToArray(1, [2, 3, 4])
 * > [1, 2, 3, 4]
 *
 * Hint:
 *  - Spread Operator
 *  - Array.concat
 */
export const prependToArray: <A>(x: A, xs: Array<A>) => Array<A> = ToDo;

/**
 * appendToArray(1, [2, 3, 4]))
 * > [2, 3, 4, 1]
 * Hint:
 *  - Spread Operator
 *  - Array.concat
 *  - Array.push
 */
export const appendToArray: <A>(x: A, xs: Array<A>) => Array<A> = ToDo;

/**
 * isEmptyArray(1, [2, 3, 4]))
 * > [2, 3, 4, 1]
 * Hint:
 *  - Spread Operator
 *  - Array.concat
 *  - Array.push
 */
export const isEmptyArray: <A>(xs: Array<A>) => Boolean = ToDo;

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
export const showArraySize: <A>(xs: Array<A>) => String = ToDo;

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
export const addNumToEach: (
  num: number,
  nums: Array<number>
) => Array<number> = ToDo;
