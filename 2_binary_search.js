// การค้นหาแบบ ทวิภาค
// Binary search is a much faster algorithm because of the way it works. At any given point it eliminates half of the array.
// But The only caveat is it only works on Sorted arrays.

const BinarySearch = (list, val) => {
  let left = 0;
  let right = list.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (list[mid] !== val && left <= right) {
    if (val < list[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return list[mid] === val ? mid : -1;
};

const list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const val = 20;
const result = BinarySearch(list, val);
console.log("result:: ", result);
