/**
 * Problem: Reverse Integer
 * Difficulty: Medium
 *
 * Approach:
 * - Extract digits using modulus (%) and build the reversed number.
 * - Use Math.abs() to handle negative numbers separately.
 * - Check for 32-bit signed integer overflow before returning result.
 *
 * Key Learning:
 * - Always handle integer overflow constraints explicitly.
 * - Be careful with sign handling when manipulating digits.
 */
var reverse = function (x) {
    const limit = -Math.pow(2, 31);
    let reverse = 0;
    let absoluteNumber = Math.abs(x);
    while (absoluteNumber > 0) {
        let lastDigit = absoluteNumber % 10;
        reverse = (reverse * 10) + lastDigit;
        absoluteNumber = Math.floor(absoluteNumber / 10)
    }
    if (reverse < limit || reverse > (Math.abs(limit) - 1)) return 0;
    return x < 0 ? -reverse : reverse;
};