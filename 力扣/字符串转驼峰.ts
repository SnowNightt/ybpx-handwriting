function camelcase(str: string): string {
  const arr = str.split(/[\s_-]+/);
  console.log(arr); // [ 'hello', 'world', 'example', 'string' ]
  return arr
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    })
    .join("");
}
const str = "hello world_example-string";
console.log(camelcase(str));
