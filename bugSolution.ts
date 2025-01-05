function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or convertible to numbers.');
  }

  return numA + numB;
}

const result1 = addSafe(1, '2'); 
console.log(result1); // Output: 3

const result2 = addSafe('1.5', 2); 
console.log(result2); //Output: 3.5

const result3 = addSafe('abc', 2); //Throws an error
console.log(result3); 