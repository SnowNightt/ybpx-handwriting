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
