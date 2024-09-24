// หาคู่ตัวเลขที่ผลรวมเท่ากับค่าเป้าหมาย
function twoSum(nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; // Currenƒt number
    const complement = target - num; // Calculate the complement needed to reach the target

    if (numMap[complement] !== undefined) {
      return [numMap[complement], i]; // Return indices if the complement is found
    }

    numMap[num] = i; // Map the current number to its index
  }

  return null; // Return null if no solution is found
}

const nums = [2, 7, 11, 15];
const target = 17;

const result = twoSum(nums, target);
console.log("Indices of the two numbers that add up to the target:", result);
// ออกเป็นตำแหน่ง, result is index number of array
