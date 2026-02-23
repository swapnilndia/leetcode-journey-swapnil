// Write a function to remove duplicated elements from an array.
const nums = [1, 1, 2];

// This is 2 pointers approach.

function removeDuplicate(nums) {
  let scanner = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[scanner]) {
      scanner = scanner + 1;
      nums[scanner] = nums[i];
    }
  }
  console.log(scanner);
  return nums;
}
console.log(removeDuplicate(nums));
