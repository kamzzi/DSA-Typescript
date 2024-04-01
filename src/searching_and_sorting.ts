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

  console.log(numbers);
};

bubbleSort([32, 11, 4, 5, 68, 10]);
