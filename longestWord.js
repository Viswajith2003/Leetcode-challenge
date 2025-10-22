let str = "my name is viswajith";

let longest = "";

let s = str.split(" ");
for (let word of s) {
  if (word.length > longest.length) {
    longest=word;
  }
}
console.log(longest);
