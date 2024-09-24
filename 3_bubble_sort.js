function BubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function BubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// This is our unsorted array
var list = [234, 43, 55, 63, 5, 6, 235, 547];
console.log("list before sort:: ", list);
BubbleSort(list);
console.log("sort 1 result:: ", list);

var list2 = [234, 43, 55, 63, 5, 6, 235, 547];
console.log("list2 before sort:: ", list2);
BubbleSort2(list2);
console.log("sort 2 result:: ", list2);
