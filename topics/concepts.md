# Concepts

## What is functional programming? 
> we construct our programs using only pure functions — in other words, functions that have no side effects. What are side effects?
> 
> -- Functional Programming in Scala

### Side effects
- Print to console or read input
- Modify a variable
- Modifying a data structure in place, e.g. array 

### Pure functions
Functions without side effects

#### Referentially transparent
> A function f is pure if the expression f(x) is referentially transparent for all referentially transparent x
> 
> -- Functional Programming in Scala

`referentially transparent` means you can replace the expression with the evaluated value of that expression. 

#### Memoisation
> A function can only be memoized if it is referentially transparent; that is, only if calling the function has exactly the same effect as replacing that function call with its return value.
> -- [Wikipedia](https://en.wikipedia.org/wiki/Memoization)

#### Example
```typescript
// pure function
const add1Pure = (x: number) => x + 1;

// function with side effect
const add1Log = (x: number) => {
  if (x % 2 == 0) 
  //  throw new Error('Even number not a lowed');
    console.log("it's even");
  return x + 1;
};
```

### First-class and Higher Order Functions
According to Wikipedia:
> first-class" is a computer science term for programming language entities that have no restriction on their use
> 
> functions are treated as first-class citizens, meaning that they can be bound to names (including local identifiers), passed as arguments, and returned from other functions, just as any other data type can.

> Higher-order functions are functions that can either take other functions as arguments or return them as results.

## fp-ts
- https://gcanti.github.io/fp-ts/
- [GitHub](https://github.com/gcanti/fp-ts)


### Functions
> fp-ts provides a few general [functions](https://gcanti.github.io/fp-ts/modules/function.ts.html) to support you with composition, constant functions, and more.

The ones we usually use for composition are
- [pipe](https://gcanti.github.io/fp-ts/modules/function.ts.html#pipe)
- [flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow)

- [tupled](https://gcanti.github.io/fp-ts/modules/function.ts.html#tupled)
- [untupled](https://gcanti.github.io/fp-ts/modules/function.ts.html#untupled)

#### Example
in level03 exercise
```typescript
/**
 * Filter a List
 *
 * This is typically what you want if the size of the resulting List is <= that of the initial.
 *
 * Hint: Use .filter and '%' for mod operator
 */
export const filterEven: (nums: Array<number>) => Array<number> = ToDo
```

<details>
  <summary> Click to reveal </summary>

```typescript
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
```

</details>

### Data Types
Data structures
#### [Option](https://gcanti.github.io/fp-ts/modules/Option.ts.html)

#### [Either](https://gcanti.github.io/fp-ts/modules/Either.ts.html)

#### [TaskEither](https://gcanti.github.io/fp-ts/modules/TaskEither.ts.html)


### Type Classes
The common interface / operations that we can generalise and operate on different data types.

They follow certain laws / rules (Category theory)

A simple type class example is [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html)

```typescript
interface Semigroup<A> {
  readonly concat: (x: A, y: A) => A
}
```
<details>
  <summary> Click to reveal </summary>

```typescript
// A common example of a semigroup is the type string with the operation +.

import { Semigroup } from 'fp-ts/Semigroup'

const semigroupString: Semigroup<string> = {
  concat: (x, y) => x + y,
}

const x = 'x'
const y = 'y'
const z = 'z'

semigroupString.concat(x, y) // 'xy'

semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'

semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
```

</details>

And then there are other ones: `Functor`, `Monad` ...


### [Higher Kinded Types](https://en.wikipedia.org/wiki/Kind_(type_theory))
- `*`, pronounced `type` which is the kind of all data types.
  - `number`
  - `Array<number>`
  - `Option<number>`

- `* -> *`, is the kind of unary type constructors
  - `Array<A>`
  - `Option<A>`

- `* -> * -> *`, is the kind of binary type constructors, currying
  - `Either<E, A>` 
    - --> `Either<Error, A>` kind is `* -> *`
      - --> `Either<Error, Application>` the kind is `*`

- `(* -> *) -> *` is the kind of HKT like `functor`
  - defined in `scala` `cats`
    ```scala
    trait Functor[F[_]] {
      def map[A, B](fa: F[A])(f: A => B): F[B]
    }
    ```
  - defined in `fp-ts`
    ```typescript
    export interface Functor<F> {
      readonly URI: F
      readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>
    }
    ```
 #### TypeScript doesn't support HKT natively
 > A distinctive feature of `fp-ts` with respect to other functional libraries is its implementation of [Higher Kinded Types](https://en.wikipedia.org/wiki/Kind_(type_theory)), which TypeScript doesn’t support natively. The idea for emulating higher kinded types in TypeScript is based on [Lightweight higher-kinded polymorphism](https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf).
