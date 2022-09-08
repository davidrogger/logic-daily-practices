function twoSum(nums: number[], target: number): number[] {
  const indexList = [];
  for (let curTarget = 0;curTarget < nums.length; curTarget += 1) {
    for (let check = 0; check < nums.length; check += 1) {
      if (curTarget !== check) {
        if (nums[curTarget] + nums[check] === target) {
          indexList.push(curTarget, check)
        }
      }
    }
  }
  const cleanList = new Set(indexList)
  return [...cleanList];
};

