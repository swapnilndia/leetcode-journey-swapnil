var majorityElement = function (nums) {
  let appearanceTimes = Math.floor(nums.length / 3);
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    } else {
      myMap.set(nums[i], 1);
    }
  }
  let myArr = [];
  for (let [key, value] of myMap) {
    if (value > appearanceTimes) {
      myArr.push(key);
    }
  }
  return myArr;
};

console.log(majorityElement([2, 3, 3]));
