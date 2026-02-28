const nums = [4, 1, 2, 1, 2];

// Using Object; (unused in final export but kept for reference)
function singleNumberObject(nums) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      hashTable[nums[i]] = hashTable[nums[i]] + 1;
    } else {
      hashTable[nums[i]] = 1;
    }
  }
  for (const [key, value] of Object.entries(hashTable)) {
    if (value === 1) {
      return key;
    }
  }
}

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
console.log(singleNumberObject(nums));
