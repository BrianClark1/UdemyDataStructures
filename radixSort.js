// function getDigit(num, place) {
//   let str = num.toString();

//   return Number(str[str.length - place - 1]);
// }

// console.log(getDigit(38492, 1))

// function digitCount(num) {
//   return num.toString().length;
// }

// console.log(digitCount(88324234));

// const mostDigits = (numsArr) => {
//   let largest = -Infinity;

//   for (let i = 0; i < numsArr.length; i++) {
//     let len = digitCount(numsArr[i]);
//     if (len > largest) {
//       largest = len;
//     }
//   }

//   return largest;
// };

// function radixSort(arr) {
//     let maxDigitCount = mostDigits(arr);

//     for (let k = 0; k < maxDigitCount; k++) {
//         let digitBuckets = Array.from({ length: 10 }, () => []);
//         for (let i = 0; i < arr.length; i++) {
//             let digit = getDigit(arr[i], k);
//             console.log(digit)
//             digitBuckets[digit].push(arr[i]);
//         }
//         arr = [].concat(...digitBuckets);
//     }

//     return arr;
// }


function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
    
console.log(radixSort([23,345,5467,12,2345,9852]))
