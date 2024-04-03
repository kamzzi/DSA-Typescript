function twoSum(nums: number[], target: number): number[] {
  let result: [number, number] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    const numTarget = target - nums[i];
    const index = nums.lastIndexOf(numTarget);

    if (index === -1 || index === i) continue;

    result = [i, index];
  }
  return result;
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
twoSum([3, 2, 4], 6);

/* 
    Requirements : Better than O(n^2).
    Not use the same element.

    Explanation of my solution :
    * First set a container to my result, enum array of 2 numbers.
    * For each number check difference between target and current number.
    * Look on lastIndexOf difference
    * If isn't in nums or the same index just continue, else this is our solution numbers.
*/
