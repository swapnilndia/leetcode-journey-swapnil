// write a function to find a palindrome number...

let arrayOfNums = [121, 1122332211, 5, 0, -13, -12341, 543];

function palindromeNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(`${arr[i]} is ❌ PALINDROME`);
      continue;
    }
    let num = arr[i];
    let reversedNum = 0;
    while (num > 0) {
      let remainder = num % 10;
      reversedNum = reversedNum * 10 + remainder;
      num = Math.floor(num / 10);
    }
    if (arr[i] === reversedNum) {
      console.log(`${arr[i]} is ✅ PALINDROME`);
    } else {
      console.log(`${arr[i]} is ❌ PALINDROME`);
    }
  }
}

palindromeNumber(arrayOfNums);
