function myBind(this: Function, content: any = window, ...args: any[]) {
  const _this = this;
  const fn = function (this: unknown, ...innerArgs: any[]) {
    const result = _this.apply(
      this instanceof fn ? this : content,
      args.concat(innerArgs)
    );
    return result;
  };
  fn.prototype = Object.create(this.prototype);
  return fn;
}
