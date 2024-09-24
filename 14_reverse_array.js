function reverseArray1(arr) {
  return arr.reverse(); // Using the built-in reverse method
}

function reverseArray2(arr) {
  const reversed = []; // Create an empty array to hold the reversed elements
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // Push each element from the original array to the reversed array
  }
  return reversed; // Return the new reversed array
}

function reverseArrayInPlace(arr) {
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left < right) {
    // Swap elements at left and right
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++; // Move the left pointer to the right
    right--; // Move the right pointer to the left
  }

  return arr; // Return the modified array
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray1([...originalArray]);

console.log("Original Array:", originalArray);
console.log("Reversed1 Array:", reversedArray);

const reversedArray2 = reverseArray2([...originalArray]);

console.log("\nOriginal Array:", originalArray);
console.log("Reversed2 Array:", reversedArray2);

const originalArrayInPlace = [1, 2, 3, 4, 5];
const reversedInPlaceArray = reverseArrayInPlace([...originalArrayInPlace]);

console.log("\nOriginal Array after in-place reversal:", originalArrayInPlace);
console.log("Reversed Array after in-place reversal:", reversedInPlaceArray);
