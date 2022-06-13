//On(n^2) Time Complexity
function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}


//On(n^2) Time Complexity, in a healthier test case it can get closer to O(n) 
//Great for Nearly sorted Data Set 
//noSwaps allows it to check whether a swap happened
//If noSwaps is true, then the array is already sorted, no point of iterating through a sorted array
function bubbleSortOptimized(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false;
      }
    }
      if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([4, 66, 76, 34, 231, 1]));
console.log(bubbleSortOptimized([4, 66, 736, 334, 454, 1]));

