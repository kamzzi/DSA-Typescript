/*
 *  Recursion.
 *
 *  What is recursion?
 *  Recursion is a process (a function in our case) that calls itself.
 * 
 *  Recursion is mostly used a Call Stack because of stacking a function using.
 * 
 *  Recursion must have a base case. A condition when the recursion ends, its unnecessary.
 * 
 *  Sometimes you want to have a helper method -> EXAMPLE 1.1

*/

// 1.1

// HELPER METHOD

const collectOddValues = (arr: number[]) => {
  const result: number[] = [];

  const helper = (helperInput: number[]) => {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 === 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

//////////////////////// GENERAL CHALLENGES FOR RECURSION ////////////////////////

// 1.

const power = (num: number, exponent: number): any => {
  if (exponent === 0) return 1;

  return num * power(num, exponent - 1);
};

power(2, 0);
power(2, 2);
power(2, 4);

// 2.

const factorial = (num: number): any => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

factorial(4);
factorial(0);

// 3.

const productOfArray = (numbers: number[]): any => {
  if (numbers.length === 0) return 1;
  const [first, ...rest] = numbers;
  return first * productOfArray(rest);
};

productOfArray([1, 2, 3]);
productOfArray([1, 2, 3, 10]);

// 4.

const recursiveRange = (num: number): any => {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
};

recursiveRange(6);
recursiveRange(10);

// 5.

const fib = (num: number): any => {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
};

fib(28);
fib(35);

// 6.

const reverse = (str: string): any => {
  if (str.length === 0) return "";

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

reverse("awesome");
reverse("rithmschool");

// 7.

const isPalindrome = (str: string): any => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  const first = str[0];
  const last = str[str.length - 1];

  if (first === last) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
};

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false

// 8.

const someRecursive = (
  numbers: number[],
  callback: (val: number) => boolean
): any => {
  if (numbers.length === 0) return false;

  const first = numbers[0];

  if (callback(first)) {
    return someRecursive(numbers.slice(1), callback);
  }
};

const isOdd = (val: number) => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false

// 9.

const flatten = (numbers: any[]): any => {
  const flat: any = [];

  numbers.forEach((number: any) => {
    if (Array.isArray(number)) {
      const a = flatten(number);
      if (a) {
        flat.push(...a);
      }
    } else {
      flat.push(number);
    }
  });
  return flat;
};

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

// 10.

const capitalizeFirst = (words: string[]) => {
  const transformedWords: string[] = [];

  const helper = (helperWords: string[]) => {
    if (helperWords.length === 0) return "";

    const item = `${helperWords[0][0].toUpperCase()}${helperWords[0]
      .slice(1)
      .toLowerCase()}`;

    transformedWords.push(item);

    helper(helperWords.slice(1));
  };

  helper(words);

  return transformedWords;
};

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

// 11.

const nestedEvenSum = (obj: any) => {
  let sum = 0;

  const helper = (helperObj: any) => {
    for (const key in helperObj) {
      const item = helperObj[key];
      if (typeof item === "number" && item % 2 === 0) {
        sum += item;
      } else if (typeof item === "object") {
        helper(item);
      }
    }
  };

  helper(obj);

  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

// 12.

const capitalizedWords = (words: string[]) => {
  const result: string[] = [];

  const helper = (helperWords: string[]) => {
    if (helperWords.length === 0) return "";

    const item = helperWords[0].toUpperCase();

    result.push(item);

    helper(helperWords.slice(1));
  };

  helper(words);

  return result;
};

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// 13.

const stringifyNumbers = (obj: any) => {
  const helper = (helperObj: any) => {
    const returnedObj: any = {};
    for (const key in helperObj) {
      const item = helperObj[key];

      if (typeof item === "number") {
        returnedObj[key] = String(item);
      } else if (
        typeof item === "object" &&
        !Array.isArray(item) &&
        item !== null
      ) {
        returnedObj[key] = helper(helperObj[key]);
      } else {
        returnedObj[key] = item;
      }
    }
    return returnedObj;
  };

  return helper(obj);
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

// 14.

const collectStrings = (obj: any) => {
  const result: string[] = [];

  const helper = (helperObj: any) => {
    for (const key in helperObj) {
      const item = helperObj[key];

      if (typeof item === "string") {
        result.push(item);
      } else {
        helper(helperObj[key]);
      }
    }
  };

  helper(obj);

  return result;
};

const obja = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obja); // ["foo", "bar", "baz"])
