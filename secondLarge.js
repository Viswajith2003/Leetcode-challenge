// let arr = [2, 3, 8, 4, 5, 6];
// let sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr[1]);

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

// const sortArr = (arr) => {
//   for (let i = 0; i <=arr.length-1; i++) {
//     for (let j = i+1; j <=arr.length-1; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr
// };

// const secondLarge=(arr)=>{
//     if(arr.length<2){
//         return null;
//     }
//     sortArr(arr);
//     return arr[1];
// }

// let arr = [2, 3, 8, 4, 5, 6];
// console.log("Second Largest is:",secondLarge(arr));

let arr = [2, 3, 8, 4, 5, 6];

if (arr.length < 2) return null;

let largest = -Infinity;
let secondlarge = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondlarge = largest;
    largest = num;
  } else if (num > secondlarge && num !== largest) {
    secondlarge = num;
  }
}

console.log(
  "Second Largest is:",
  secondlarge === -Infinity ? null : secondlarge
);
