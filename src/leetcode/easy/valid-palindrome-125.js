/**
 * Problem: Valid Palindrome
 * Difficulty: Easy
 *
 * Approach:
 * - Convert the input string to lowercase.
 * - Build a cleaned string containing only alphanumeric characters.
 * - Reverse the cleaned string.
 * - Compare the cleaned string with its reversed version.
 * - If both match, the string is a palindrome.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Learning:
 * - Properly filter characters using ASCII checks.
 * - Normalize case before comparison.
 * - String immutability can make repeated concatenation costly.
 */

var isPalindrome = function (s) {
  let alphaNumericString = '';
  const lowerCaseString = s.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (isCharacterValid(lowerCaseString[i])) {
      alphaNumericString = alphaNumericString + lowerCaseString[i];
    }
  }
  let reversedString = '';
  for (let i = alphaNumericString.length - 1; i >= 0; i--) {
    reversedString = reversedString + alphaNumericString[i];
  }
  return reversedString === alphaNumericString;
};
function isCharacterValid(char) {
  const asciiValue = char.charCodeAt(0);
  if ((asciiValue <= 122 && asciiValue >= 97) || (asciiValue <= 57 && asciiValue >= 48)) {
    return true;
  }
}

isPalindrome('hari');
