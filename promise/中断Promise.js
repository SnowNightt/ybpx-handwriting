function cancelPromise(executor) {
  let isCancel = false;
  const promise = new Promise((resolve, reject) => {
    executor(
      (value) => (isCancel ? reject(new Error("取消")) : resolve(value)),
      (error) => (isCancel ? reject(new Error("取消")) : reject(error))
    );
  });
  const cancel = () => {
    isCancel = true;
  };
  return {
    promise,
    cancel,
  };
}
const { promise, cancel } = cancelPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  });
}, 2000);
promise.then((res) => console.log(res)).catch((err) => console.log(err));
cancel();
