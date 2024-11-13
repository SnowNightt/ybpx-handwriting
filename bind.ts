// function myBind(this: Function, content: any = window, ...args: any[]) {
//   const _this = this;
//   const fn = function (this: unknown, ...innerArgs: any[]) {
//     const result = _this.apply(
//       this instanceof fn ? this : content,
//       args.concat(innerArgs)
//     );
//     return result;
//   };
//   fn.prototype = Object.create(this.prototype);
//   return fn;
// }
interface Function {
  myBind<T extends any[], R>(
    this: (...args: T) => R,
    ctx: any,
    ...args: T
  ): (...args: T) => R;
}

Function.prototype.myBind = function <T extends any[], R>(
  this: (...args: T) => R,
  ctx: any = window,
  ...args: T
): (...args: T) => R {
  const _this = this;

  function fn(this: unknown, ...a: T): R {
    // 使用类型断言告诉 TypeScript 连接后的数组类型是 T
    return _this.apply(this instanceof fn ? this : ctx, [...args, ...a] as T);
  }

  // 保持原型链
  fn.prototype = Object.create(this.prototype);
  return fn;
};
