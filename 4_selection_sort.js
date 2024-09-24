function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

const list = [64, 25, 12, 22, 11];
console.log("Before Sort List:: ", list);
SelectionSort(list);
console.log("After Selection Sort:: ", list);
