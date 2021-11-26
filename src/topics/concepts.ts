import { array } from 'fp-ts/lib/Array';
import { ToDo } from '../utils/predef';

const add1Pure = (x: number) => x + 1;

const add1Log = (x: number) => {
  if (x % 2 == 0)
    //  throw new Error('Even number not a lowed');
    // callLexa
    // console.log("it's even");
    return x + 1;
};

export const runTest = () => {
  const num3pure = add1Pure(2);
  const num3 = add1Log(2);

  console.log(num3pure);
  console.log(3);

  // console.log(add1Log(2))
  // console.log(add1Log(2))
  console.log(num3);
};

const f1 = () => [1, 2, 4];
const filter = (f: (x: number) => boolean) => (array: Array<number>) => {
  return array.filter(f);
};

const partial = filter((x: number) => x % 2 === 0);
