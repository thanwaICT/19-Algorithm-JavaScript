function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const list = [64, 25, 12, 22, 11];
console.log("Before Sort List:: ", list);
InsertionSort(list);
console.log("After Insertion Sort:: ", list);
