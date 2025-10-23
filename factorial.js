function Factorial(num) {
  if (num < 1) {
    return false;
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(Factorial(5));
