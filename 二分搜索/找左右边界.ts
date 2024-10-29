const searchRange = function (nums: number[], target: number) {
  const res = [-1, -1];
  let left = 0,
    right = nums.length - 1;
  // 找左
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target == nums[mid]) right = mid - 1;
    else if (target > nums[mid]) left = mid + 1;
    else if (target < nums[mid]) right = mid - 1;
  }
  if (nums[left] == target) res[0] = left;
  // 找右
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target == nums[mid]) left = mid + 1;
    else if (target > nums[mid]) left = mid + 1;
    else if (target < nums[mid]) right = mid - 1;
  }
  if (nums[right] == target) res[1] = right;
  return res;
};
