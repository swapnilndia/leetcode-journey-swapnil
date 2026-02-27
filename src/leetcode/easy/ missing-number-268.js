var missingNumber = function (nums) {
  let mySet = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!mySet.has(i)) {
      return i;
    }
  }
  return 0;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
