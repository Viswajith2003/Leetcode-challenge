const arr = [3, 6, 8, 2, 4, 1];

let descSort = [...arr].sort((a, b) => b - a);      //copy+sort
let asceSort = arr.slice().sort((x, y) => x - y);   //copy+sort
console.log(descSort);
console.log(asceSort);
