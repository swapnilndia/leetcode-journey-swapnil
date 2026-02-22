// Problem: Print Square Star Pattern
// Write a program to print an n × n square of stars.
//
// Example (n = 4):
// ****
// ****
// ****
// ****

function printSquareStarPattern(n) {
  for (let i = 0; i < 20; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row = row + '*';
    }
    console.log(row);
  }
}
printSquareStarPattern(4);

// Problem: Right Triangle Star Pattern
// Write a program to print a right-angled triangle star pattern of height n.
//
// Example (n = 4):
// *
// **
// ***
// ****
//
// Constraints:
// 1 <= n <= 100

function rightTriangledStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = row + '*';
    }
    console.log(row);
  }
}
rightTriangledStarPattern(6);

// Problem: Increasing Number Triangle Pattern
// Write a program to print a right-angled triangle pattern of numbers of height n.
// Each row should contain numbers starting from 1 up to the row number.
//
// Example (n = 4):
// 1
// 12
// 123
// 1234
//
// Constraints:
// 1 <= n <= 100

function increasingNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

increasingNumberTriangle(5);

// Problem: Repeating Number Triangle Pattern
// Write a program to print a triangle pattern of height n.
// In each row, print the row number repeated as many times as the row number.
//
// Example (n = 4):
// 1
// 22
// 333
// 4444
//
// Constraints:
// 1 <= n <= 100

function repeatingNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row = row + i;
    }
    console.log(row);
  }
}
repeatingNumberTriangle(5);

// Problem: Decreasing Number Triangle Pattern
// Write a program to print an inverted triangle pattern of numbers of height n.
// The first row prints numbers from 1 to n, and each next row reduces by one number.
//
// Example (n = 5):
// 12345
// 1234
// 123
// 12
// 1
//
// Constraints:
// 1 <= n <= 100

function decreasingNumberTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

decreasingNumberTriangle(5);

// Problem: Right-Aligned Increasing Star Triangle Pattern
// Write a program to print a right-aligned triangle star pattern of height n.
// The number of stars increases by one in each row.
//
// Example (n = 3):
//   *
//  **
// ***
//
// Constraints:
// 1 <= n <= 100

function rightAlignedIncreasingStarTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row = row + ' ';
    }
    for (let k = n - i + 1; k <= n; k++) {
      row = row + '*';
    }
    console.log(row);
  }
}

rightAlignedIncreasingStarTriangle(8);

// Problem: Binary Triangle Pattern
// Write a program to print a triangle pattern of height n
// using alternating binary digits (1 and 0) starting with 1 in every row.
//
// Example (n = 4):
// 1
// 10
// 101
// 1010
//
// Constraints:
// 1 <= n <= 100

function binaryTrianglePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        row = row + '0';
      } else {
        row = row + '1';
      }
    }
    console.log(row);
  }
}
binaryTrianglePattern(6);

// Problem: Continuous Alternating Binary Triangle Pattern
// Write a program to print a triangle pattern of height n
// using continuous alternating digits (1 and 0) across the entire pattern.
//
// Example (n = 4):
// 1
// 01
// 010
// 1010
//
// Constraints:
// 1 <= n <= 100

function continousAlternatingBinaryTrianglePattern(n) {
  let toggle = '1';
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row = row + toggle;
      if (toggle === '1') {
        toggle = '0';
      } else {
        toggle = '1';
      }
    }
    console.log(row);
  }
}
continousAlternatingBinaryTrianglePattern(6);
