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

## fp-ts
https://gcanti.github.io/fp-ts/
https://github.com/gcanti/fp-ts


### Functions
> fp-ts provides a few general [functions](https://gcanti.github.io/fp-ts/modules/function.ts.html) to support you with composition, constant functions, and more.

The ones we usually use for composition are
[pipe](https://gcanti.github.io/fp-ts/modules/function.ts.html#pipe)
[flow](https://gcanti.github.io/fp-ts/modules/function.ts.html#flow)

### Data Types
Data structures
#### [Option](https://gcanti.github.io/fp-ts/modules/Option.ts.html)



### Type Classes
The common interface / operations that we can generalise and operate on different data types.

They follow certain laws / rules (Category theory)

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
  