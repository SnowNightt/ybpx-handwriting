const myNew = (constructor, ...args) => {
  const instance = {};
  instance.__proto__ = constructor.prototype;
  const result = constructor.apply(instance, args);
  return typeof result === "object" && result !== null ? result : instance;
};
