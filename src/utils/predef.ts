export const ToDo: () => never = () => {
  throw new Error('Not NotImplemented');
};

export const assertNever = (x: never): never => {
  throw new Error('Unexpected object: ' + x);
};
