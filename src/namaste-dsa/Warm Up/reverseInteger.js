// Write a function to reverse a number;

function reverseNumber(number) {
  let reverse = 0;
  let absoluteNumber = Math.abs(number);

  while (absoluteNumber > 0) {
    let lastDigit = absoluteNumber % 10;
    reverse = reverse * 10 + lastDigit;
    absoluteNumber = Math.floor(absoluteNumber / 10);
  }
  return number < 0 ? -reverse : reverse;
}

console.log(reverseNumber(-1234));
