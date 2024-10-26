function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    const n2 = target - n1;
    if (map.has(n2)) {
      return [i, map.get(n2)!];
    }
    map.set(n1, i);
  }
  throw new Error("未找到符合条件的两个数");
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
