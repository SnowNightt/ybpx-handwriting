function removePairs(str: string): string {
  if (str.length < 2) return str;
  const reg = /AB|CD/;
  str = str.replace(reg, "");
  if (reg.test(str)) {
    return removePairs(str);
  }
  return str;
}
const input = "ABCDABCDXY";
const result = removePairs(input);
console.log(result);
