// write a functin that return the count of digits in a number

const numsArray = [-121, 31, 14562, 346346, 1125787696959, 0];

function countDigitsOfNumInArray(arr) {
  if (arr.length < 1) return 'no elements found in the arr';
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    let num = Math.abs(arr[i]);
    if (num === 0) {
      console.log(`${num} has 1 digit`);
      continue;
    }
    while (num > 0) {
      num = Math.floor(num / 10);
      count++;
    }
    console.log(`${arr[i]} has ${count} digits`);
  }
  return;
}
countDigitsOfNumInArray(numsArray);
