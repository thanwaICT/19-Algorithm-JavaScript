// การตรวจคำย้อนกลับ
// Palindrome: A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. Examples of palindromes include:
// Words: "level", "radar", "civic"
// Phrases: "A man, a plan, a canal, Panama!"
// Numbers: 121, 12321

function PalindromeCheck(s) {
  return s === s.split("").reverse().join("");
}

// Example Usage
const testStrings = ["level", "hello", "radar", "world", "A man, a plan, a canal, Panama"];

testStrings.forEach((s) => {
  const normalized = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Normalizing input
  if (PalindromeCheck(normalized)) {
    console.log(`"${s}" is a palindrome.`);
  } else {
    console.log(`"${s}" is not a palindrome.`);
  }
});
