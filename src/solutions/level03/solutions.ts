import { ToDo, assertNever } from '../../utils/predef';

/**
 * prependToList(1, [2, 3, 4])
 * > [1, 2, 3, 4]
 *
 * Hint:
 *  - Spread Operator
 *    return [x, ...xs];
 *  - Array.concat
 *    return [x].concat(xs);
 */
export const prependToList: <A>(x: A, xs: Array<A>) => Array<A> = (x, xs) => {
  return [x, ...xs];
};

/**
 * appendToList(1, [2, 3, 4]))
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
export const appendToList: <A>(x: A, xs: Array<A>) => Array<A> = (x, xs) => {
  return [...xs, x];
};

/**
 * You can use Array.length to know whether an instance is empty or not.
 *
 * You can also use spread operator like what we have done previously and then test if the there is a head.
 */

export const isEmptyList_Length: <A>(xs: Array<A>) => boolean = (xs) => {
  return xs.length == 0;
};

export const isEmptyList: <A>(xs: Array<A>) => boolean = (xs) => {
  const [head, ..._] = xs;
  return !head;
};

/**
 * scala> showListSize(List(1, 2, 3))
 * > "This is a list of size 3"
 *
 * scala> showListSize(List("ABC"))
 * > "This is a list of size 1"
 *
 * scala> showListSize(Nil)
 * > "This is an empty list"
 *
 * Hint: Use pattern matching, string interpolation and length
 */
// def showListSize[A](xs: List[A]): String = ???

/**
 * Mapping a function over a List
 *
 * This is typically what you want if the initial List and the resulting List
 * are of the same size.
 *
 * scala> addNumToEach(10, List(1, 2, 3))
 * > List(11, 12, 13)
 *
 * Hint: Use .map
 **/
export const addNumToEach_ECMA: (
  num: number,
  nums: Array<number>
) => Array<number> = (num, nums) => {
  return nums.map((x) => x + num);
};

import * as A from 'fp-ts/Array';
import { flow, pipe } from 'fp-ts/lib/function';
export const addNumToEach: (
  num: number,
  nums: Array<number>
) => Array<number> = (num, nums) => {
  return A.map((x: number) => x + num)(nums);
};

/**
 * Filter a List
 *
 * This is typically what you want if the size of the resulting List is <= that of the initial.
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
  A.foldLeft(()=> 1, (head, tail)=> head * product(tail))
)

/**
 * scala> min(List(4, 6, 1))
 * > 1
 *
 * scala> min(Nil)
 * > Int.MinValue
 *
 * Hint: Use pattern matching and .foldLeft
 **/
// def min(nums: List[Int]): Int =
//   nums match {
//     case Nil => ???
//     case head :: tail => ???
//   }

export const min: (nums: Array<number>)=> number = flow(
  A.foldLeft(() => Infinity, (head, tail)=> {
    const t = min(tail);
    return head < t ? head : t;
  })
)