var multiply = function (num1, num2) {
  const result = BigInt(num1) * BigInt(num2);
  return result.toString();
};

const num1 = '123456789';

const num2 = '987654321';

console.log(multiply(num1, num2));
