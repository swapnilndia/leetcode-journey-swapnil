// Linear Search

const arr = [4, 9, 1, 0, 2, 10];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr, 10);
console.log(result);
