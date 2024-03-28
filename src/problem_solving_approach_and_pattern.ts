/*
 *  Problem solving approach and patterns.
 *
 *  PROBLEM SOLVING APPROACH
 *
 *  What is algorithm?
 *
 *  An algorithm is a certain number of steps, sequences to fulfill our program.
 *
 *  Steps to solve a problem:
 *  1. Understand the problem.
 *  The most important and at the same time the most difficult thing is that before writing the code,
 *  think, write down and arrange in your head how you would like to solve a given task.
 *  Don't you know something? Ask, learn deeply about the topic and all its input values, output values.
 *
 *  2. Concrete examples
 *  Work with some examples to explore more a problem and approach to solve it.
 *
 *  3. Break It Down
 *  If you already have the solution in your head, you know all the necessary information,
 *  write down the steps you will take in a notebook or other place, they will allow you to describe what you want to do.
 *
 *  4.Solve -> look back and refactor
 *  Solve it, but always look back and refactor your code.
 *
 *  PROBLEM SOLVING PATTERNS
 *
 *  1. Frequency Counter Pattern
 *  Pattern uses objects or sets to collect values/frequencies of values. Can avoid for nested loops O(n^2).
 *
 *  EXAMPLE : AD 1.
 *  2. Multiple Pointers Pattern
 *  Pattern creating pointers or values that correspond to an index or position and move towards to beginning,end,middle on a certain condition.
 *
 *  EXAMPLE : AD 2.
 *  3. Sliding Window Pattern
 *  Creating a window depending on certain condition increases or closes.
 *
 *  EXAMPLE : AD 3.
 *  4. Divide and Conquer Pattern
 *  Dividing a data set into smaller chunks and then repeating process with a subset of data.
 *
 *  EXAMPLE : AD 4.
 */

// AD 1.

const letterFrequencies = (str: string) => {
  const obj: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  return obj;
};

const validAnagram = (strA: string, strB: string) => {
  if (strA.length !== strB.length) return false;
  const strAObj = letterFrequencies(strA);
  const strBObj = letterFrequencies(strB);

  for (const [key, value] of Object.entries(strAObj)) {
    if (strBObj[key] !== value) {
      return false;
    }
  }
  return true;
};

// AD 2.

const countUniqueValues = (numbers: number[]) => {
  let count = 0;
  for (let i = 0, j = 0; j < numbers.length; j++) {
    if (numbers[j] === numbers[i]) {
      continue;
    }
    i++;
    numbers[i] = numbers[j];

    count = i + 1;
  }

  return count;
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// AD 3.

const maxSubsequenceArray = (numbers: number[], k: number) => {
  if (numbers.length < k) return null;

  let windowSum = 0;
  let max = 0;

  for (let i = 0, j = 0; i < numbers.length; i++) {
    windowSum += numbers[i];

    if (i - j + 1 === k) {
      max = Math.max(windowSum, max);
      windowSum -= numbers[j];
      j++;
    }
  }

  return max;
};

maxSubsequenceArray([1, 2, 5, 2, 8, 1, 5], 2);
maxSubsequenceArray([1, 2, 5, 2, 8, 1, 5], 4);
maxSubsequenceArray([4, 2, 1, 6], 1);

// AD 4.

const binarySearch = (numbers: number[], search: number) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (numbers[middle] === search) {
      return middle;
    }
    if (numbers[middle] > search) {
      right = middle - 1;
    }
    if (numbers[middle] < search) {
      left = middle + 1;
    }
  }

  return -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

//////////////////////// GENERAL CHALLENGES FOR ALL SECTIONS ////////////////////////

// 1.

const sameFrequency = (num1: number, num2: number) => {
  const num1Frequency: Record<number, number> = {};
  const num2Frequency: Record<number, number> = {};

  while (num1) {
    let lastDigit = Math.floor(num1 % 10);
    num1Frequency[lastDigit]
      ? num1Frequency[lastDigit]++
      : (num1Frequency[lastDigit] = 1);
    num1 = Math.floor(num1 / 10);
  }

  while (num2) {
    let lastDigit = Math.floor(num2 % 10);
    num2Frequency[lastDigit]
      ? num2Frequency[lastDigit]++
      : (num2Frequency[lastDigit] = 1);
    num2 = Math.floor(num2 / 10);
  }

  for (const key in num1Frequency) {
    if (num1Frequency[key] !== num2Frequency[key]) return false;
    return true;
  }
};

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

// 2.

const areThereDuplicates = <T extends number | string>(...inputs: T[]) => {
  const obj: Record<any, any> = {};

  for (let i = 0; i < inputs.length; i++) {
    const record = inputs[i];

    obj[record] ? obj[record]++ : (obj[record] = 1);
  }

  for (const key in obj) {
    const value = obj[key];
    if (value > 1) return true;
  }

  return false;
};

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// 3.

const averagePair = (numbers: number[], average: number) => {
  if (!numbers.length) return false;

  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const avg = (numbers[left] + numbers[right]) / 2;

    if (avg > average) {
      right--;
    }

    if (avg < average) {
      left++;
    }

    if (avg === average) {
      return true;
    }
  }

  return false;
};

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

// 4.

const isSubsequence = (str1: string, str2: string) => {
  let str1Left = 0;
  let str2Left = 0;
  let sum = 0;
  while (str1Left < str1.length && str2Left !== str2.length) {
    const str1Char = str1[str1Left];
    const str2Char = str2[str2Left];

    if (str1Char === str2Char) {
      sum++;
      str1Left++;
      str2Left++;
    } else {
      str2Left++;
    }
  }

  return sum === str1.length;
};

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)

// 5.

const maxSubarraySum = (numbers: number[], k: number) => {
  if (numbers.length < k) return null;

  let windowSum = 0;
  let maxSum = -Infinity;
  let start = 0;

  for (let i = 0; i < numbers.length; i++) {
    windowSum += numbers[i];

    if (k - (i - start) - 1 === 0) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= numbers[start];
      start++;
    }
  }
  return maxSum;
};

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

// 6.

const minSubArrayLen = (numbers: number[], k: number) => {
  let windowSum = 0;
  let min = Infinity;
  let start = 0;

  for (let i = 0; i < numbers.length; i++) {
    windowSum += numbers[i];
    while (windowSum >= k) {
      min = Math.min(min, i - start + 1);
      windowSum -= numbers[start];
      start++;
    }
  }

  return min === Infinity ? 0 : min;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

// 7.

const findLongestSubstring = (str: string) => {
  let dict: string[] = [];
  let longestWindow = 0;
  let longest = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (dict.includes(str[i])) {
      console.log(dict);
      longest = Math.max(longest, longestWindow);
      longestWindow = 0;
      dict = [];
    }
    dict.push(str[i]);
    longestWindow++;
  }

  console.log(longest);
  return longest === -Infinity ? 0 : longest;
};

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
