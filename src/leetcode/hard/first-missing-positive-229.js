var firstMissingPositive = function (nums) {
  let mySet = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!mySet.has(i)) {
      return i;
    }
  }
  return mySet.size + 1;
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));
