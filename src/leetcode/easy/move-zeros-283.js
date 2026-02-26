/**
 * Problem: Move Zeroes
 * Difficulty: Easy
 *
 * Approach:
 * - Traverse the array from the start.
 * - Also create a new variable, which will keep the track of the zero.
 * - As we encounter any non-zero number while traversing, we will swap it with the zero.
 * - Return the array at last
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Learning:
 * - Properly scan the array for zero.
 */

const numArr = [0, 1];

function moveZeros(nums) {
  let numShifted = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[numShifted] = nums[i];
      numShifted++;
    }
  }
  for (let i = numShifted; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums, numShifted);
}

moveZeros(numArr);
