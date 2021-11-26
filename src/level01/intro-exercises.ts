import { ToDo } from '../utils/predef';

/**
 * Level 1 focuses on basic TS, including syntax and especially programming with functions.
 * We will go through a few exercises to familiarise ourselves with writing TS.
 *
 * What's a function?
 *
 * A function takes inputs and returns an output.
 * It should always return the same output given the same inputs.
 */

// IntroExercises
// function add_func(x: number, y: number): number {
//   ToDo();
// }

// const add_func_anonymous = function (x: number, y: number): number {
//   ToDo();
// };

/**
 * This function called `add` takes two Ints and return an Int.
 * You must specify the types of the inputs but the output return type is optional
 * and can be inferred by the compiler.
 * > add(1, 2)
 * = 3
 **/
export const add: (x: number, y: number) => number = ToDo;
/**
 * Let's write the curried version of the `add` function defined previously
 * > addCurried(1)(2)
 * = 3
 **/
export const addCurried: (x: number) => (y: number) => number = ToDo;
/**
 * Reuse the `addCurried` function and partially apply it for adding 5 to anything.
 * > add5(4)
 * = 9
 *
 **/
export const add5: (x: number) => number = ToDo;

/**
 * Parametric types, generics
 *
 * How many ways can you implement this function?
 * Note: Angle brackets (Types at compile time), round brackets (Values at run time)
 */
// function foo_func<A>(a: A): A {
//   ToDo();
// }

export const foo: <A>(a: A) => A = ToDo;
/**
 * How about this one?
 */
export const bar: (a: number) => number = ToDo;
/**
 * What does the return type of this function tell us about
 * what it can do once implemented?
 */
export const pandora: (x: number) => void = ToDo;

/**
 * > timesTwoIfEven(4)
 * = 8
 * > timesTwoIfEven(3)
 * = 3
 *
 * Important: Every `if` must have an `else`! Otherwise your function is not total.
 */
export const timesTwoIfEven: (x: number) => number = ToDo;

/**
 * > showNumber(100)
 * = "The number is 100"
 *
 * Hint: Use string interpolation / templating, e.g. `${ var }`
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#string
 */
export const showNumber: (x: number) => string = ToDo;

/**
 * Tuples
 *
 * How can we group together `name` and `age` in a pair?
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 */
export const pair: (name: string, age: number) => [string, number] = ToDo;

/**
 * How can we extract the first element of a pair?
 *
 * Hint 1: Check the getters on `pair`.
 * Hint 2: Read up on pattern matching on tuples.
 *
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 */
export const first: (pair: [string, number]) => string = ToDo;

/**
 * How can we extract the second element of a pair?
 */
export const second: (pair: [string, number]) => number = ToDo;
