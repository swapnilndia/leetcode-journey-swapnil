// Write a function that searches for an element and return the index, if the element is not present then just return -1.

const arr1 = [4, 2, 0, 10, 88, 30];

function searchElement(array, element) {
  if (array.length < 1) return 'No element present in array';
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log('searchElement =>', searchElement(arr1, 10));

// Write a function that returns the number of negative numbers in the array.
const arr2 = [4, -2, 0, 10, -88, -30, 0, 199, -199];

function countNegativeNums(array) {
  if (array.length < 1) return 'No element present in array';
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log('countNegativeNums =>', countNegativeNums(arr2));

// Write a function that return the largest number in an array

// const arr3 = [4, -2, 0, 10, -88, -30, 0, 199, -199];
const arr4 = [];

function findLargestNum(array) {
  if (array.length < 1) return 'No element present in array';
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
console.log('findLargestNum =>', findLargestNum(arr4));

// Write a functon that return the smallest number in an array

const arr5 = [4, -2, 0, 10, -88, -30, 0, 199, -199];
// const arr6 = [];

function findSmallestNum(array) {
  if (array.length < 1) return 'No element present in array';
  let smallest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}
console.log('findSmallestNum =>', findSmallestNum(arr5));

// Write a function to find Numbers with Even Number of Digits

const array7 = [555, 901, 482, 1771];

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const isEvenNumber = isDigitEven(nums[i]);
    if (isEvenNumber) {
      count++;
    }
  }
  return count;
};

function isDigitEven(num) {
  let divideTimes = 0;
  while (num > 0) {
    divideTimes++;
    num = Math.floor(num / 10);
  }
  if (divideTimes % 2 === 0) {
    return true;
  }
  return false;
}

console.log('findNumbers =>', findNumbers(array7));
