// หารร่วมมาก : จำนวนเต็มที่มากที่สุด ซึ่งหารเลขในกลุ่มนั้นทั้งหมดได้ลงตัว
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b]; // Using destructuring assignment to swap values
  }
  return a; // Return the GCD
}

const num1 = 48;
const num2 = 18;

const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
