/*
 *  Searching.
 *
 *  It's simple searching of array. Nothing more :D
 *  You will see all details on examples.
 * 
 *  In more advanced sorting algorithms i will explaining.

*/

/*
    Type - Linear Search
    Time - O(n)
    Best Time - O(1)
*/

const linearSearch = (numbers: number[], k: number) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === k) {
      return i;
    }
  }
  return -1;
};

linearSearch([1, 2, 3, 4, 5, 6], 3);

/*
    Type - Binary Search
    Time - O(log(n))
    Best Time - O(1)
*/

const binary_search = (numbers: number[], k: number) => {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid === k) {
      return mid;
    }
    if (mid > k) {
      end = mid - 1;
    }
    if (mid < k) {
      start = mid + 1;
    }
  }

  return -1;
};

binary_search([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], 3);

/*
 *  Sorting.
 *
 *  Rearrranging the items in a collection are in some kind of order.
 *  Sort from smalle to longest, alphabetically and so more..
 *
 *  JS have some built sorting algorithms includes, but to learning more i will code.
 *
 *  We have some of sorting algorithms which have own names, we will describe all of them.
 */

/*
  Type : Bubble Sort.
*/

const bubbleSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
    }
  }

  return numbers;
};

bubbleSort([32, 11, 4, 5, 68, 10]);

/*
  Type : Selection Sort.
*/

const selectionSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[smallest]) {
        smallest = j;
      }
    }

    if (smallest !== i) {
      [numbers[i], numbers[smallest]] = [numbers[smallest], numbers[i]];
    }
  }
  return numbers;
};

selectionSort([32, 11, 4, 5, 68, 10]);

/*
  Type : Insertion Sort.
*/

const insertionSort = (numbers: number[]) => {
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    for (var j = i - 1; j >= 0 && numbers[j] > current; j--) {
      numbers[j + 1] = numbers[j];
    }

    numbers[j + 1] = current;
  }

  return numbers;
};

insertionSort([32, 11, 4, 5, 68, 10]);

/*
  Type : Merge Sort.
*/

const merge = (arrA: number[], arrB: number[]) => {
  const result: number[] = [];

  let a = 0;
  let b = 0;

  while (a < arrA.length && b < arrB.length) {
    if (arrB[b] > arrA[a]) {
      result.push(arrA[a]);
      a++;
    } else {
      result.push(arrB[b]);
      b++;
    }
  }

  while (a < arrA.length) {
    result.push(arrA[a]);
    a++;
  }

  while (b < arrB.length) {
    result.push(arrB[b]);
    b++;
  }

  return result;
};

const mergeSort = (numbers: number[]):any => {
  if (numbers.length <= 1) return numbers;

  let mid = Math.floor(numbers.length / 2);
  let left = mergeSort(numbers.slice(0, mid));
  let right = mergeSort(numbers.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
