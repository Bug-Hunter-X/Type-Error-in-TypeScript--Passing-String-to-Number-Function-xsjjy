function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, '2'); // Type Error. Expected number, got string
console.log(result);