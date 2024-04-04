function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let result = "";
  let input = x;

  while (x) {
    result += Math.floor(x % 10);
    x = Math.floor(x / 10);
  }

  return Number(result) === input;
}

/* 
    Requirements :
    Solve without converting the integer to a string.
    Time - Not given.

    Explanation of my solution : 
    * If number is on minus it's false because never be a palindrome.
    * Setup a some variables container.
    * Do a while loop to handle all digits from number, on this example -> 1 , 2 , 1 and mutate given input.
    * Check if the same.
*/
