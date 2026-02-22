/**
 * Problem: Largest Odd Number in String
 * Difficulty: Easy
 *
 * Approach:
 * - Traverse the string from the end.
 * - Find the rightmost odd digit.
 * - Return the substring from the start up to that index.
 * - If no odd digit is found, return an empty string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding output string)
 *
 * Key Learning:
 * - Reverse traversal is useful when the rightmost valid position matters.
 * - Checking digit parity can be done directly using modulo.
 */

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }
  return '';
};

console.log(largestOddNumber('52'));
