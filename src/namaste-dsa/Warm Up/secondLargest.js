// find the second largest number in an array;
const secondLargestTestCases = {
  // 1. Normal cases
  normalAscending: [1, 2, 3, 4, 5],
  normalRandom: [10, 5, 8, 20],
  normalMixed: [99, 12, 34, 88, 100],

  // 2. Duplicates (distinct second largest required)
  allDuplicates: [5, 5, 5, 5],
  duplicatesWithAnswer: [10, 20, 20, 30],
  multipleDuplicates: [1, 2, 3, 3, 4, 4],
  duplicatesDescending: [7, 7, 6, 6, 5],

  // 3. Negative numbers only
  negativesAscending: [-1, -2, -3, -4],
  negativesMixed: [-10, -5, -3, -1],
  negativesWithDuplicate: [-5, -5, -2],

  // 4. Mix of positive & negative
  mixedNumbers1: [-10, 0, 5, 2],
  mixedNumbers2: [-1, 100, 50, -50],
  twoMixedNumbers: [-100, 1],

  // 5. Very small arrays
  emptyArray: [],
  singleElement: [5],
  twoElements: [5, 10],
  twoSameElements: [10, 10],

  // 6. Already sorted
  sortedAscending: [1, 2, 3, 4, 5],
  sortedDescending: [5, 4, 3, 2, 1],

  // 7. Extreme values
  safeIntegers: [Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER],
  withInfinity: [Infinity, 10, 20],
  withNegativeInfinity: [-Infinity, -10, -20],

  // 8. Largest repeated at edges
  largestAtEnd: [1, 2, 3, 4, 5, 5],
  largestAtStart: [5, 5, 4, 3, 2, 1],

  // 9. Large identical block + one different
  manyOnesOneTwo: [1, 1, 1, 1, 1, 2],
  manyNinesOneEight: [9, 9, 9, 9, 9, 8],

  // 10. Infinity and Zero
  infinityAndZero: [-Infinity, 0],
};

function secondLargestNumber(arr) {
  if (arr.length < 2) return undefined;
  let largestNumber = arr[0];
  let secondLargestNum = -Infinity;
  let isSecondValueFound = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNum = largestNumber;
      largestNumber = arr[i];
      isSecondValueFound = true;
    } else {
      if (arr[i] > secondLargestNum) {
        secondLargestNum = arr[i];
        isSecondValueFound = true;
      }
    }
  }
  if (!isSecondValueFound) return undefined;

  return secondLargestNum;
}

function testRunner(array) {
  for (const [testName, arr] of Object.entries(array)) {
    console.log(`${testName} => `, secondLargestNumber(arr));
  }
}

testRunner(secondLargestTestCases);
