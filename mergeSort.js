//Input 2 sorted arrays
//Initialize an empty array to return
//Initialize 2 pointers to track progress through each array
// while each of the pointers are not at their maximum (length of array)
// compare the two indexed elements to determine which one is smaller and then push to output array
//Once one array is exhasuted we just want to push the remaining elements from the second array (because its already sorted) ==> Thats what the final 2 while loops are doing
// return the sorted array!
//Merge Sort Merging Arrays implementation!

//My First Solution 
function mergingArrays(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

// console.log(mergingArrays([43, 73, 106], [12, 84, 102]));



 function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }
  
  let half1 = arr.slice(0, (Math.floor(arr.length / 2)));
  let half2 = arr.slice(((Math.floor(arr.length / 2))));

  return mergingArrays(mergeSort(half1), mergeSort(half2));

}

console.log(mergeSort([43, 73, 45, 67, 89, 13]));

// Merge function from earlier
//Udemy Solution 
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// // Recursive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
// }

// mergeSort([10,24,76,73])



