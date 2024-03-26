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
