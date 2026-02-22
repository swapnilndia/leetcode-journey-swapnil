/**
 * Problem: Largest Even Number
 * Difficulty: Easy
 *
 * Approach:
 * - Traverse the string from the end.
 * - Find the rightmost occurrence of digit "2".
 * - Slice the string from the start up to that index.
 * - If "2" is not found, return an empty string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding output string)
 *
 * Key Learning:
 * - Reverse traversal helps when the rightmost position matters.
 * - Be careful that string search conditions match the real requirement.
 */

var largestEven = function (s) {
  let largestNumIndex = null;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '2') {
      largestNumIndex = i;
      break;
    }
  }
  return largestNumIndex !== null ? s.slice(0, largestNumIndex + 1) : '';
};
largestEven('1212124');
