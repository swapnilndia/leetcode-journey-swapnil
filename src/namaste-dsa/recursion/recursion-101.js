/**
 * # Recursion
 *
 * A function that calls itself to solve a smaller version of the
 * same problem.
 *
 * # Two parts of recursion
 * 1. Base case: the stopping condition (when to stop recursing).
 * 2. Recursive case: where the function calls itself.
 */

// Write a recursive function that prints value of n to 1;

function recursivePrint(n) {
  if (n < 1) return;
  console.log(n);
  n = n - 1;
  recursivePrint(n);
}

recursivePrint(10);

// Write a recursive functin that prints 1 to n;
let n = 15;
function recursivePrint2(x) {
  if (x > n) return;
  console.log(x);
  recursivePrint2(x + 1);
}

recursivePrint2(1);
