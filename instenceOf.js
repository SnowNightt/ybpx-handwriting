const instanceOf = (instance, cons) => {
  if (typeof instance !== "object" && instance !== null) return;
  let proto = Object.getPrototypeOf(instance);
  console.log(instance);
  while (proto) {
    if (proto === cons.prototype) return true;
    console.log(proto);
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};
const arr = Array(1, 2, 3);
//   console.log(instanceOf(arr,Array));
instanceOf(arr, Array);
console.dir(Array);
