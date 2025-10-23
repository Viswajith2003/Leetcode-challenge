let str = "my name is viswajith";

// let longest = "";

// let s = str.split(" ");
// for (let word of s) {
//   if (word.length > longest.length) {
//     longest=word;
//   }
// }

let longest = str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
console.log(longest);
