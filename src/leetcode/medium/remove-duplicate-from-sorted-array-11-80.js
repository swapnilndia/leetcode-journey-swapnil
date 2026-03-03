var removeDuplicates = function (nums) {
  let scannedPosition = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nums[scannedPosition] = nums[i];
      count = count + 1;
    } else {
      if (nums[i] === nums[scannedPosition] && count < 2) {
        scannedPosition = scannedPosition + 1;
        nums[scannedPosition] = nums[i];
        count = count + 1;
      } else if (nums[i] !== nums[scannedPosition]) {
        scannedPosition = scannedPosition + 1;
        nums[scannedPosition] = nums[i];
        count = 1;
      }
    }
  }
  return scannedPosition + 1;
};
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
