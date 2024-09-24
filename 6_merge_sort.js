// กาเรียงลำดับแบบแบ่งและผสาน
function MergeSort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    MergeSort(left);
    MergeSort(right);

    // Merge the two halves
    let i = 0,
      j = 0,
      k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    // Copy any remaining elements of left, if any
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }

    // Copy any remaining elements of right, if any
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  return arr;
}

const list = [38, 27, 43, 3, 9, 82, 10];
console.log("Before Sort List:: ", list);
MergeSort(list);
console.log("After Merge Sort:: ", list);
