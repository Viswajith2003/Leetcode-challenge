function revArr(a) {
  let reversed = [];
  for (let i = a.length; i > 0; i--) {
    reversed.push(i);
  }
  return reversed;
}

let arr = [1, 2, 3, 4];
console.log(revArr(arr));
// console.log(arr.reverse());
