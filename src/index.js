import myFunction, {multiply, magic_number} from './tools';

function calculateSomething (a, b) {
  const sum = myFunction(a, b);
  const multiple = multiply(a, b);

  return multiple - sum + magic_number;
}

console.log(calculateSomething(10, 20));
