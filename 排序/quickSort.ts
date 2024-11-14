function quickSort(arr: any[]): any[] {
  if (arr.length <= 1) return arr;
  const point = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > point) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), point, ...quickSort(right)];
}
const array = [5, 3, 8, 1, 2, 7, 4, 6];
const sortedArr = quickSort(array);
console.log(sortedArr);
console.log(array);

