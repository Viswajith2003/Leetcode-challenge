
// reverse a string

// str = "viswajith";
// let rev = [...str].reverse().join("");
// console.log(rev);


let str="viswajith";
let rev=" "

for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}

console.log(rev)

// Example :
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]


// function revStr(s) {
//   let i = 0;
//   let j = s.length - 1;

//   while (i < j) {
//     let t = s[i];
//     s[i] = s[j];
//     s[j] = t;
//     i++;
//     j--;
//   }
//   return s;
// }

// s = ["h", "e", "l", "l", "o"];
// console.log(revStr(s));




