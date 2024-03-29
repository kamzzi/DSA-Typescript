/*
 *  Recursion.
 *
 *  What is recursion?
 *  Recursion is a process (a function in our case) that calls itself.
 * 
 *  Recursion is mostly used a Call Stack because of stacking a function using.
 * 
 *  Recursion must have a base case. A condition when the recursion ends, its unnecessary.

*/

//////////////////////// GENERAL CHALLENGES FOR RECURSION ////////////////////////

// 1.

const power = (num: number, exponent: number) => {
  if (exponent === 0) return 1;

  return num * power(num, exponent - 1);
};

power(2, 0);
power(2, 2);
power(2, 4);

// 2.

const factorial = (num: number) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

factorial(4);
factorial(0);

// 3.

const productOfArray = (numbers: number[]) => {
  if (numbers.length === 0) return 1;
  const [first, ...rest] = numbers;
  return first * productOfArray(rest);
};

productOfArray([1, 2, 3]);
productOfArray([1, 2, 3, 10]);

// 4.

const recursiveRange = (num: number) => {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
};

recursiveRange(6);
recursiveRange(10);

// 5.

const fib = (num: number) => {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
};

fib(28);
fib(35);

// 6.

const reverse = (str: string) => {
  if (str.length === 0) return "";

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

reverse("awesome");
reverse("rithmschool");

// 7.

const isPalindrome = (str: string) => {
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
) => {
  if (numbers.length === 0) return false;

  const first = numbers[0];

  if (callback(first)) {
    return someRecursive(numbers.slice(1), callback);
  }
};

const isOdd = (val: number) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
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
