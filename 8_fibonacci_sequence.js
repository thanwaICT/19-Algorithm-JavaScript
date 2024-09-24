// ลำดับเลขฟีโบนัชชี
// The Fibonacci sequence is a series of numbers where each number (after the first two) is the sum of the two preceding ones. It typically starts with 0 and 1. The sequence goes like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function Fibonacci(n) {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Function to generate the first n Fibonacci numbers
function generateFibonacciSeries(n) {
  const series = [];
  for (let i = 0; i < n; i++) {
    series.push(Fibonacci(i));
  }
  return series;
}

// Example: Generate the first 10 Fibonacci numbers
const n = 20;
const fibonacciSeries = generateFibonacciSeries(n);
console.log("The first " + n + " Fibonacci numbers are:", fibonacciSeries);
