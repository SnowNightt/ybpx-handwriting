const myInstanceof = function (instance: any, constructor: any) {
  if (typeof instance !== "object" || instance == null) return false;
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    if (proto === constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};
const arr = [1];
console.log(myInstanceof(arr, Array));
