// Primary number
function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // If divisible by any number other than 1 and itself
  }
  return true; // n is a prime number
}

const testNumbers = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];

testNumbers.forEach((n) => {
  if (isPrime(n)) {
    console.log(`${n} is a prime number.`);
  } else {
    console.log(`${n} is not a prime number.`);
  }
});
