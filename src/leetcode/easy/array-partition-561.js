var arrayPairSum = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let maxSum = 0;
  for (let i = 0; i < arr.length; i = i + 2) {
    maxSum = maxSum + arr[i];
  }
  return maxSum;
};

const nums = [1, 4, 3, 2];

console.log(arrayPairSum(nums));
