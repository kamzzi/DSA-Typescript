function removeElement(nums: (number | string)[], val: number): number {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }

  return j;
}

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([3, 3], 3);
