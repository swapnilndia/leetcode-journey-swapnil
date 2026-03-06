var finalValueAfterOperations = function (operations) {
  let x = 0;
  let myAdditionSet = new Set(['X++', '++X']);

  for (let i = 0; i < operations.length; i++) {
    if (myAdditionSet.has(operations[i])) {
      x = x + 1;
    } else {
      x = x - 1;
    }
  }
  return x;
};

const operations = ['--X', 'X++', 'X++'];

console.log(finalValueAfterOperations(operations));
