Function.prototype.myApply = function (context = window, args) {
  console.log("mycall的this", this);

  const symbol = Symbol();
  context[symbol] = this;
  const res = context[symbol](...args);
  delete context[symbol];
  return res;
};
const obj = {
  name: "xiao",
  age: 23,
};
function show(...args) {
  console.log(...args);
  console.log("show函数的this", this);
}
show.myApply(obj, [1, 2]);
