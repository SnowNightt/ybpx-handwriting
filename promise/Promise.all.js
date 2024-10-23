const isIterable = (obj) => {
  return obj !== null && typeof obj[Symbol.iterator] === "function";
};

function all(iterable) {
  if (!isIterable(iterable)) {
    throw new TypeError("sd");
  }

  return new Promise((resolve, reject) => {
    const res = [];
    const items = Array.from(iterable);
    let count = 0;
    if (items.length === 0) resolve(res);
    for (let p of items) {
      Promise.resolve(p)
        .then((val) => {
          console.log(val);

          res.push(val);
          count++;
          if (count === items.length) {
            resolve(res);
          }
        })
        .catch(reject);  // .catch(reject) 是对 .catch(error => reject(error)) 的简写
    }
  });
}
all([1, 2]).then((res) => {
  console.log(res);
});
