function missNo(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      for (let j = arr[i] + 1; j < arr[i + 1] ; j++) {
        res.push(j);
      }
    }
  }
  return res;
}

let arr = [1, 2, 6];
console.log(missNo(arr));
