## Types
### Basic Types
https://www.typescriptlang.org/docs/handbook/basic-types.html

### Interfaces
https://www.typescriptlang.org/docs/handbook/interfaces.html

```typescript
interface Person {
  readonly name: string;
  readonly age: number;
}
const teen: Person = { name: 'John Kane', age: 15 };

const adult: Person = {...teen, age=25};

// destructuring
const {name, age} = teen;
```

### Classes
https://www.typescriptlang.org/docs/handbook/classes.html

### Implements vs Extends
- A class `implements` an interface or multiple interfaces
  ```typescript
  interface Person {
    readonly name: string;
    readonly age: number;
  }

  interface Printable {
    print(): string;
  }
  
  class Student implements Person {
    ... 
  }
 
  class PrintableStudent implements Person, Printable {
    ... 
  }
  ```
- A class `extends` another class
  ```typescript
  class CollegeStudent extends Student {
  ...
  }
  ```
- An interface `extends` an interface or multiple interfaces

### Functions
Please refer to the level01

### Enums
https://www.typescriptlang.org/docs/handbook/enums.html
```typescript
enum TrafficLight {
  Red,
  Yellow,
  Green,
}
```

### Adanced Types
https://www.typescriptlang.org/docs/handbook/advanced-types.html

#### Intersection Types
It is interface composition. 

```typescript
interface Printable {
  print(): string;
}

export type PrintablePerson = Person & Printable;

export class Student implements Person {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class PrintableStudent implements Person, Printable {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    return `Student ${this.name} is ${this.age} years old.`;
  }
}

export class PrintableStudentIntersection implements PrintablePerson {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    return `Student ${this.name} is ${this.age} years old.`;
  }
}
```

#### Union Types
`getSmallPet` only returns `Fish` or `Bird` so we can be sure no one has a pet Dinosaur.

```typescript
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

const getSmallPet: () => Fish | Bird = {
...
}
```

##### Union Types in fp-ts
- [Option](https://gcanti.github.io/fp-ts/modules/Option.ts.html)
- [Either](https://gcanti.github.io/fp-ts/modules/Either.ts.html)


#### Discriminated Unions 
> Discriminated unions, also known as tagged unions or algebraic data types

https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

To implement this matching we need to provide additional metadata for the interfaces we defined.

```typescript
interface Red {...}
interface Yellow {...}
interface Green {...}

type TrafficLightUnion = Red | Yellow | Green;

export const showTrafficLightUnion: (
  trafficLight: TrafficLightUnion
) => string = (trafficLight: TrafficLightUnion) => {
  switch(...) {
    ...
  }
}
```