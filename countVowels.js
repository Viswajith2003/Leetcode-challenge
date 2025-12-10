// Total Number of uniq vowels

// let str = "viswajithosu";
// let vowel = new Set(["a", "e", "i", "o", "u"]);
// // console.log(vowel);
// let org = new Set();

// let s = str.split("");
// for (let word of s.toLowerCase) {
//   if (vowel.has(word)) {
//     org.add(word);
//   }
//   //   console.log(word);
// }

// console.log("vowels :" + [...org]);
// console.log("Count of vowels :" + org.size);

//Total count of vowels
let str = "MentorBrostudents";

let vowel = ["a", "e", "i", "o", "u"];
// let current = [];
let uniq=new Set();
let count = 0;

for (let char of str.toLowerCase()) {
  if (vowel.includes(char)) {    //[ 'e', 'o', 'o', 'u', 'e' ] 
    // current.push(char); 
    uniq.add(char);   
    // if(!uniq.includes(char))
    //     uniq.push(char);
    }
}
// count=uniq.length

console.log("vowels are:",[...uniq])
console.log("vowels count:", uniq.size)
