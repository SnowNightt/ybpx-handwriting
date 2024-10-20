const isIterable = (obj) => {
  return obj !== null && typeof obj[Symbol.iterator] === "function";
};
function race(iterable) {
  if (!isIterable(iterable)) throw new TypeError("类型错误");
  return new Promise((resolve, reject) => {
    for (let item of iterable) {
      Promise.resolve(item).then(resolve).catch(reject);
    }
  });
}
