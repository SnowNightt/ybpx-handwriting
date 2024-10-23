// 待完善...
const isObj = (obj) => typeof obj === "object" && obj !== null;
const isArr = (obj) => Array.isArray(obj);
function deepclone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const res = isArr(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (isObj(obj[key])) res[key] = deepclone(obj[key]);
      else res[key] = obj[key];
    }
  }
  return res;
}

// 进阶版
// 解决 循环引用、无法拷贝 undefined、function ，Date 和 RegExp拷贝成普通对象
function deepClonePro(value, hash = new WeakMap()) {
  // undefined或null不需要拷贝
  if (value == null) return value;
  // 函数不需要拷贝
  if (typeof value == "function") return value;
  // 原始值不需要拷贝
  if (typeof value !== "object") return value;
  if (value instanceof RegExp) return new RegExp(value);
  if (value instanceof Date) return new Date(value);
  // 剩下的情况就是value是对象
  const obj = new value.constructor(); // {} | []
  if (hash.get(value)) {
    return hash.get(value);
  }
  hash.set(value, obj);
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      obj[key] = deepClonePro(value[key], hash);
    }
  }
  return obj;
}
const person = { name: "ming", age: 24, like: { fir: "run" } };
const obj1 = deepClonePro(person);
person.like.fir = "fly";
console.log(obj1.like);
const obj2 = {name: obj2};
