const recursiveSum = (n) => {
  if (n == 0) return 0;
  return n + recursiveSum(n - 1);
};

console.log(recursiveSum(5));
// Find the sum of n elements in array;

let arr = [5, 3, 2, 0, 1];

function sum(n) {
  if (n === 0) {
    return arr[n];
  }

  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));
let arr1 = [5, 3, 2, 3, 6, 7];
function sumOfAllOddNums(n) {
  let isOdd = arr1[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr1[n] : 0;
  }
  return isOdd ? arr1[n] + sumOfAllOddNums(n - 1) : 0 + sumOfAllOddNums(n - 1);
}

console.log(sumOfAllOddNums(arr1.length - 1));

// factorial using recursion

function factorialRecursion(n) {
  if (n === 1) return 1;
  return n * factorialRecursion(n - 1);
}

var trailingZeroes = function (n) {
  const factorial = factorialRecursion(n);
  console.log(factorial);
};

console.log(trailingZeroes(5));
