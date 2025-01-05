# Type Error in TypeScript: Passing String to Number Function

This repository demonstrates a common type error in TypeScript: passing a string argument to a function that expects a number.

## Bug

The `add` function is defined to accept two number arguments and return their sum. However, in the code, we're passing a string ('2') as the second argument. This results in a type error during compilation.

## Solution

The solution involves type checking and string conversion to handle potential type mismatches. The updated `add` function checks for string arguments and converts them to numbers using `parseFloat` before performing the addition.  Type guards are also used to improve type safety and provide more specific error messages if needed.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` to see the buggy code.
3. Compile the code using `tsc bug.ts` (ensure you have the TypeScript compiler installed). You should see a type error.
4. Open `bugSolution.ts` to see the corrected code.
5. Compile the corrected code using `tsc bugSolution.ts`. This version should compile without errors.
