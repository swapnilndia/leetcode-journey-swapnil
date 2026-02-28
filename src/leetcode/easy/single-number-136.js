const nums = [4, 1, 2, 1, 2];

// Using Map
var singleNumber = function (nums) {
  const myHashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myHashMap.get(nums[i]) > 0) {
      myHashMap.set(nums[i], myHashMap.get(nums[i]) + 1);
    } else {
      myHashMap.set(nums[i], 1);
    }
  }
  for (const [key, value] of myHashMap) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(singleNumber(nums));
