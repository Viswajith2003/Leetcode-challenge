// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

var addStrings = function (num1, num2) {
  let sum = parseInt(num1) + parseInt(num2);
  return sum;
};

n1 = "11";
n2 = "123";
console.log(addStrings(n1, n2));
