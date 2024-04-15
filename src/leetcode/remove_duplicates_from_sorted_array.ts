function removeDuplicates(nums: (number | string)[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    const first = nums[k];
    const next = nums[k + 1];

    if (first === next) {
      nums.splice(k + 1, 1);
      nums.push("_");
    } else {
      k++;
    }
  }
  return k;
}

/* 
    Requirements : No one

    Explanation of my solution :
    * Loop over array
    * Set a first and next element to look up.
    * If the same remove next element and push underscore to the array.
    * Increment pointer k and return it.
*/
