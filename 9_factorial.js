// แฟกทอเรียล
function Factorial(n) {
  if (n == 0) return 1;

  return n * Factorial(n - 1);
}

// Function to generate the first n Factorial numbers
function generateFactorialSeries(n) {
  const series = [];
  for (let i = 0; i < n; i++) {
    series.push(Factorial(i));
  }
  return series;
}

// Example: Generate the first 5 Factorial numbers
const n = 5;
const factorialSeries = generateFactorialSeries(n);
console.log("The first " + n + " F numbers are:", factorialSeries);
