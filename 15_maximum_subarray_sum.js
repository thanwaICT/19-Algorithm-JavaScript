// หาผลรวมย่อยสูงสุด

function max_subarrray_sum(arr) {
  let maxSum = arr[0]; // Initialize maxSum to the first element
  let currentSum = arr[0]; // Initialize currentSum to the first element

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i]; // Current number in the array
    currentSum = Math.max(num, currentSum + num); // Update currentSum
    maxSum = Math.max(maxSum, currentSum); // Update maxSum
  }

  return maxSum; // Return the maximum subarray sum
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// In the given array [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// the maximum subarray is [4, -1, 2, 1], which sums to 6.
const result = max_subarrray_sum(arr);
console.log("The maximum subarray sum is:", result);

//Kadane's Algorithm is an efficient way to solve the maximum subarray sum problem in linear time, making it suitable for large datasets. If you have any further questions or need additional explanations, feel free to ask!
