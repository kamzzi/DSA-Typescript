function isValid(s: string): boolean {
  const stack = [];

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const lastItemInStack = stack[stack.length - 1];

    const bracket = brackets[lastItemInStack];

    if (bracket === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}

isValid("()[]{}}{");
isValid("{[]}");
isValid("()");
isValid("()[]{}");
isValid("(]");

/* 
    Requirements : No one

    Explanation of my solution :
    * Set a stack and brackets obj.
    * Add first item to stack.
    * Loop over items from 1, take a bracket and check if the opposite.
*/
