const searchInsert = function (nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  return left;
};
