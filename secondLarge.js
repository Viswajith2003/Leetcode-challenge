let arr = [2, 3, 8, 4, 5, 6];
let sortedArr = arr.sort((a, b) => b - a);
console.log(sortedArr[1]);


// 1️⃣ (b - a) → Descending order
// Compare two numbers a and b
// If (b - a) > 0 → swap
// Result: largest numbers come first
// Example: [2, 3, 8, 4] → sorted descending → [8, 4, 3, 2]


// 2️⃣ (a - b) → Ascending order
// Compare two numbers a and b
// If (a - b) > 0 → swap
// Result: smallest numbers come first
// Example: [2, 3, 8, 4] → sorted ascending → [2, 3, 4, 8]