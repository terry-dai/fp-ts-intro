import { ToDo, assertNever } from '../utils/predef';
/**
 * These exercises introduce data types and also algebraic data types (ADTs). ADTs are a huge part of typed functional programming.
 * You will also be introduced to a very useful technique for working with ADTs, i.e. pattern matching.
 */

/**
 * *********************************
 * * Section 1 - Person ************
 * *********************************
 */
/**
 * A simple data type
 *
 * Here is an example of a `Person` type, which is a wrapper on `String` and `Int`.
 *
 * This is a "product type", i.e. a `Person` is a "product" of `String` and `Int`.
 *
 */
export interface Person {
  readonly name: string;
  readonly age: number;
}

/**
 * an interface with readonly properties is a close approximation
 * of an immutable data structure.
 */
// If the variable isn't bound to the interface type we defined,
// the compiler won't complain if you try to assign to the readonly property.
const person = { name: 'John Kane', age: 35 };

// It only complains when the type is specified.
// const person:Person = {name: "John Kane", age: 35};

person.age = 40;

/**
 * const person = Person("Bob", 50)
 * showPerson1(person)
 * = "Bob is 50 years old"
 *
 * Hint: return a new Person
 * Javascript Destructuring works here too.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 **/
export const showPerson1: (person: Person) => string = (
  person: Person
): string => {
  return `${ToDo} is ${ToDo} years old`;
};

/**
 * Same as `showPerson1`, but using string interpolation and properties only.
 *
 * Hint: Navigate the Person class' fields using the "." operator
 */
export const showPerson2: (person: Person) => string = (
  person: Person
): string => {
  return `${ToDo} is ${ToDo} years old`;
};

/**
 * const person = Person("Bob", 50)
 * changeName("Bobby", person)
 * = Person("Bobby", 50)
 *
 * `person` is immutable! This function returns a new instance of `Person` with the `name` changed.
 *
 * Hint: return a new person
 */
export const changeName: (newName: string, person: Person) => Person = ToDo;

/**
 * Let's look at another data type.
 *
 * `Wallet` is a tiny type on `number` to represent the amount of money someone has.
 */

/**
 * *********************************
 * * Section 2 - Wallet ************
 * *********************************
 */

export interface Wallet {
  readonly amount: number;
}

/**
 * > const wallet = {amount: 20.5}
 * > showWallet(wallet)
 * = "The wallet amount is 20.5"
 *
 * You can solve this like how you solved `showPerson1` or `showPerson2`.
 */
export const showWallet: (wallet: Wallet) => string = ToDo;

/**
 * Here is another example of working with immutable values.
 *
 * > val wallet = {amount: 100}
 * > purchase(80, wallet)
 *
 * Hint: You need to calculate the new amount first.
 **/
export const purchase: (cost: number, wallet: Wallet) => Wallet = ToDo;

/**
 * *********************************************
 * * Section 3 - Test Driven Development *******
 * *********************************************
 */

/**
 * > showTrafficLightStr("red")
 * = "The traffic light is red"
 *
 * > showTrafficLightStr("yellow")
 * = "The traffic light is yellow"
 *
 * > showTrafficLightStr("green")
 * = "The traffic light is green"
 *
 * What if `trafficLight` is not "red", "yellow" or "green"?
 *
 * Go to `type-exercises.spec.ts` and implement the test for this scenario: "should return a default on other inputs"
 *
 * return "The traffic light is invalid" for other inputs
 **/

/**
 * **********************************************
 * * Section 4 - Traffic Light as String ********
 * **********************************************
 */

/**
 * Implement the following showTrafficLightStr function to pass all your tests!
 */
export const showTrafficLightStr: (trafficLight: string) => string = ToDo;

/**
 * ***************************************************************************
 * * Section 4.1 - Adding a new Traffic Light (using TDD) *****
 * ***************************************************************************
 */

/**
 * We need to have a new traffic light called Flashing:
 *
 * 1. Implement the test for this scenario: "should show flashing"
 *    it should return "the traffic light is flashing"
 *
 * 2. Extend `showTrafficLightStr` that you have just implemented above to support this new flashing functionality.
 *
 *
 *
 * > showTrafficLightStr("flashing")
 * = "The traffic light is flashing"
 *
 **/

/**
 * *********************************************
 * * Section 5 - Traffic Light as ADTs *********
 * *********************************************
 */

/**
 * Enum
 * Typescript supports numeric and string based enums.
 * https://www.typescriptlang.org/docs/handbook/enums.html
 *
 * to simulate Sum Type in scala like:
 * ```
 * sealed trait TrafficLight
 * case object Red extends TrafficLight
 * case object Yellow extends TrafficLight
 * case object Green extends TrafficLight
 * ```
 * You can read it as a `TrafficLight` is either `Red` or `Yellow` or `Green`.
 *
 * This technique helps you make invalid states/values irrepresentable in your programs
 */
export enum TrafficLight {
  Red,
  Yellow,
  Green,
}

/**
 * > showTrafficLight(Red)
 * = "The traffic light is red"
 *
 * > showTrafficLight(Yellow)
 * = "The traffic light is yellow"
 *
 * > showTrafficLight(Green)
 * = "The traffic light is green"
 *
 * Hint: Use pattern matching / switch
 **/

export const showTrafficLight: (trafficLight: TrafficLight) => string = ToDo;

/**
 * *********************************************************
 * * Section 5.1 - Add a new Traffic Light *******
 * *********************************************************
 */

/**
 * Now introduce a new type of `TrafficLight` called `Flashing`.
 *
 * 1. Add a new value Flashing to the `TrafficLight` Type
 *
 * 2. Try yarn compile. What happens? How is this different than the previous String implementation?
 *
 * 3. Extend `showTrafficLight` to fix the compilation error.
 *
 * 4. Fill in the unit test for this new scenario: "showTrafficLight should show Flashing"
 *
 */

/**
 * *********************************************************
 * * Section 6 Advanced Types                        *******
 * *********************************************************
 */

/*
 * Intersection Types
 * First & Second
 */
interface Printable {
  print(): string;
}

// type PrintablePerson=???

export class Student implements Person {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Implement the required method
export class PrintableStudent implements Student, Printable {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print = ToDo;
}

// Complete the PrintablePerson interface definition above
// then uncomment the following code and implement the type (interface)
// export class PrintableStudentIntersection implements PrintablePerson {
// }

/*
 * Union Types
 * First | Second
 */

interface Dinosaur {
  roar(): void;
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// How can you gurrantee no one has a pet Dinosaur
const getSmallPet = ToDo;

/*
 * Discriminated Unions
 * ADT
 *
 * Implementing the `showTrafficLightUnion` like above `showTrafficLight`
 * Hint, it requires a bit extra help.
 */

export interface RedLight {}
export interface YellowLight {}
export interface GreenLight {}

export const Red: RedLight = {};
export const Yellow: YellowLight = {};
export const Green: GreenLight = {}

type TrafficLightUnion = RedLight | YellowLight | GreenLight;

export const showTrafficLightUnion: (
  trafficLight: TrafficLightUnion
) => string = ToDo;
