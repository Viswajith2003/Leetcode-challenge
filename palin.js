// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  let rev = 0,
    last;
  let org = x;

  if (x < 0) {
    return false;
  }

  while (x > 0) {
    last = x % 10;     //121%10 =1 ,2,1
    rev = rev * 10 + last;  //rev=0*10+1=1,12,121
    x = Math.floor(x / 10);         //121/10=12
  }
//   return rev;

  if (org == rev) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(-121));
