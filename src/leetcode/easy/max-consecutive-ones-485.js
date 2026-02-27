function maxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === 1) {
    currentCount = nums[i] === 1 ? currentCount + 1 : 0;
    maxCount = maxCount > currentCount ? maxCount : currentCount;
    console.log(currentCount, maxCount);
    // } else {
    //     currentCount = 0;
    // }
  }
  return maxCount;
}

console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
