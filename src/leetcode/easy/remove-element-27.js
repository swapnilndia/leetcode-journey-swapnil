// Write a function to remove element from an array.
const nums = [0,1,2,2,3,0,4,2]

// This is 2 pointer approach 

function removeElement(nums, val) {
    let secondPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[secondPointer] = nums[i];
            secondPointer++
        }
    }
    console.log(secondPointer, nums)
}

removeElement(nums, 2)