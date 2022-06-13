
//Helper function that moves the pivot element to its correct location 
// and returns its index 
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    //Defining a swap functions to keep lthing less verbose 
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      //   [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      swap(arr, swapIdx, i);
    }
  }

  // [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  swap(arr, start, swapIdx);

  return swapIdx;
}

// console.log(pivotHelper([40, 14, 35, 23, 11], 0, 5));

//if  left and right and the same, then the pivot index
//returned the location that the number is already at
//i.e. it was in the correct sorted place already
//Divide and conquer until theres an array with length 1 
//that is in the correct sorted position 
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
