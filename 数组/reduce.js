Array.prototype.myReduce = function (callback, init) {
  const arr = Array.prototype.slice.call(this);
  let index = init ? 0 : 1;
  let res = init ? init : arr[0];
  for (let i = index; i < arr.length; i++) {
    res = callback.call(null, res, arr[i], i, this);
  }
  return res;
};

const res = [1, 2, 3, 4, 5].myReduce((acc, curr, index, arr) => {
  return acc + curr;
});
console.log(res);
