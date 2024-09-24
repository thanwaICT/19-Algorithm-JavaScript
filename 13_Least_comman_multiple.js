// ตัวคูณร่วมน้อย (ค.ร.น.) คือ ตัวคูณร่วม (หรือพหุคูณร่วม) ที่มีค่าน้อยที่สุด ที่จำนวนนับชุดใด(ตั้งแต่สองจำนวนขึ้นไป) ไปหารได้ลงตัว เช่น ค.ร.น. ของ 8 และ 12 คือ 24 เพราะ 24 คือจำนวนที่น้อยมากที่สุดที่ถูกทั้ง 8 และ 12 หารลงตัว
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b]; // Using destructuring assignment to swap values
  }
  return a; // Return the GCD
}

const num1 = 8;
const num2 = 12;

const result = lcm(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is: ${result}`);
