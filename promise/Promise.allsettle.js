// 判断是否是可迭代对象
const isIterable = (iterable) => {
  return iterable !== null && typeof iterable[Symbol.iterator] === "function";
};
function all(iterable) {
  if (!isIterator(iterable)) throw new TypeError("类型错误");
  return new Promise((resolve, reject) => {
    const items = Array.from(iterable);
    const length = items.length;
    const result = [];
    let count = 0;
    if (length === 0) resolve(result);
    for (let item of items) {
      // item可能不是一个Promise，可能是原始类型值
      Promise.resolve(item)
        .then((value) => {
          result.push({ status: "Fulfilled", value });
        })
        .catch((err) => {
          result.push({ status: "Rejected", reason: err });
        })
        .finally(() => {
          count++;
          if (count == length) resolve(result);
        });
    }
  });
}
