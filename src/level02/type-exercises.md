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
interface Red {.meta.}
interface Yellow {.meta.}
interface Green {.meta.}

type TrafficLightUnion = Red | Yellow | Green;

export const showTrafficLightUnion: (
  trafficLight: TrafficLightUnion
) => string = (trafficLight: TrafficLightUnion) => {
  switch(.meta.) {
    ...
  }
}
```

##### Example solution
<details>
  <summary> Click to reveal </summary>

  ```typescript
  interface Light {
    type: string;
  }
  export interface RedLight extends Light {
    type: 'red';
  }
  export interface YellowLight extends Light {
    type: 'yellow';
  }
  export interface GreenLight extends Light {
    type: 'green';
  }

  export interface FashingLight extends Light {
    type: 'flashing';
    frequency: number;
  }

  // object instances provided to simulate `case object`
  // which also provides convinence so the client don't need to 
  // construct them and just use the provided instance.
  export const Red: RedLight = { type: 'red' };
  export const Yellow: YellowLight = { type: 'yellow' };
  export const Green: GreenLight = { type: 'green' };

  type TrafficLightUnion = RedLight | YellowLight | GreenLight | FashingLight;

  export const showTrafficLightUnion: (
    trafficLight: TrafficLightUnion
  ) => string = (trafficLight) => {
    switch (trafficLight.type) {
      case 'red':
        return 'The traffic light is red';
      case 'yellow':
        return 'The traffic light is yellow';
      case 'green':
        return 'The traffic light is green';
      case 'flashing':
        return 'The traffic light is flashing';
      // assertNever is a trick to enable a stronger exhaustive check
      // in the `switch` block.
      // https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-exhaustiveness-checking
      default:
        return assertNever(trafficLight);
    }
  };
  ```

  Test for the flashing light.
  ```typescript

      it('should show flashing', () => {
        const flashing: LV2.FashingLight = { type: 'flashing', frequency: 5 };
        const str = LV2.showTrafficLightUnion(flashing);
        expect(str).toEqual('The traffic light is flashing');
      });
  ```

</details>