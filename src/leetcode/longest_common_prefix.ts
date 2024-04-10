function longestCommonPrefix(strs: string[]): string {
  let result = "";

  let isValid = true;
  let start = 0;

  while (isValid) {
    let char = strs[0][start];

    if (!char) break;

    for (let i = 0; i < strs.length; i++) {
      if (char === strs[i][start]) {
        continue;
      } else {
        isValid = false;
      }
    }

    if (isValid) {
      result += char;
      start++;
    }
  }
  return result;
}

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix([""]);

/* 
    Requirements : No one

    Explanation of my solution :
    * Setup a variables for result, start and check isValid.
    * While is valid, take a char from first item in array and validate.
    * Loop over rest items and check is the same prefix, if not set a valid on false.
    * If is valid add a char to result and increment start.
*/
