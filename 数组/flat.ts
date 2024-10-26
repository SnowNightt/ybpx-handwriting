function myFlat(arr: any[], depth: number = 1) {
  if (depth < 1) return arr.slice();
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth >= 1) {
      acc.push(...myFlat(curr, depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}
const res = myFlat([1, 2, [3, 4, [6]]]);
console.log(res);
