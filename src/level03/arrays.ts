import { ToDo, assertNever } from '../utils/predef';

const array1: number[] = [1, 2, 3];
const array2: Array<number> = [1, 2, 3];

/**
 * These exercises will teach you how to work with Array type and using fp-ts
 * At the end of these exercises, you should have a good intuition on when to use `map`, `filter` or `fold`.
 */

/**
 * prependToList(1, [2, 3, 4])
 * > [1, 2, 3, 4]
 * 
 * Hint: 
 *  - Spread Operator
 *  - Array.concat
 */
export const prependToList: <A>(x: A, xs: Array<A>) => Array<A> = ToDo;

/**
 * appendToList(1, [2, 3, 4]))
 * > [2, 3, 4, 1]
 * Hint: 
 *  - Spread Operator
 *  - Array.concat
 *  - Array.push
 */
export const appendToList: <A>(x: A, xs: Array<A>) => Array<A> = ToDo;


const isEmptyArray: <A>(xs: Array<A>)=> Boolean = ToDo;
