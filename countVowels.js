// Total Number of uniq vowels

// let str = "viswajithosu";
// let vowel = new Set(["a", "e", "i", "o", "u"]);
// // console.log(vowel);
// let org = new Set();

// let s = str.split("");
// for (let word of s) {
//   if (vowel.has(word)) {
//     org.add(word);
//   }
//   //   console.log(word);
// }

// console.log("vowels :" + [...org]);
// console.log("Count of vowels :" + org.size);


//Total count of vowels
let str = "viswajithosu";
let vowel = new Set(["a", "e", "i", "o", "u"]);

let count=0;

for(let word of str){
    if(vowel.has(word)){
        count++
    }
}

console.log("Count of vowels :",count)
