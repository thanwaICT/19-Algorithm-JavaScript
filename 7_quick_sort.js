function QuickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return QuickSort(left).concat(middle, QuickSort(right));
}

const list = [10, 7, 8, 9, 1, 5];
console.log("Before Sort List:: ", list);
const result = QuickSort(list);
console.log("After Quick Sort:: ", result);
