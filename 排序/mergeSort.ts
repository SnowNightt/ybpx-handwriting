function mergeSort<T extends number[]>(arr: T): T {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right)) as T;
}
function merge<T extends number[]>(left: T, right: T): T {
  const result: number[] = [];
  while (left.length && right.length) {
    const l = left.shift()!;
    const r = right.shift()!;
    if (l < r) result.push(l);
    else result.push(r);
  }
  while (left.length) {
    result.push(left.shift() as number);
  }
  while (right.length) {
    result.push(right.shift() as number);
  }
  return result as T;
}
