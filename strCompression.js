// input :"aaabbcccdd"
// output : a3b2c3d2

function strCompr(str) {
  let count = 1;
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count ++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}

let str = "aaabbcccdd";

console.log(strCompr(str));
