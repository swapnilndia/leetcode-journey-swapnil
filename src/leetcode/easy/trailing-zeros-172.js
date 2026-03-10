var trailingZeroes = function (n) {
  let nearestMultipleOf5 = findNearestMultiple(n);
  const numOfTrailingZeros =
    Math.floor(nearestMultipleOf5 / 5) +
    Math.floor(nearestMultipleOf5 / 25) +
    Math.floor(nearestMultipleOf5 / 125) +
    Math.floor(nearestMultipleOf5 / 625) +
    Math.floor(nearestMultipleOf5 / 3125);
  return numOfTrailingZeros;
};

const findNearestMultiple = (n) => {
  if (n % 5 === 0) return n;
  return findNearestMultiple(n - 1);
};

console.log(trailingZeroes(10));
