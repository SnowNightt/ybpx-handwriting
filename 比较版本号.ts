function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);
  const maxLength = Math.max(v1.length, v2.length);
  for (let i = 0; i < maxLength; i++) {
    const num1 = v1[i] || 0;
    const num2 = v2[i] || 0;
    if (num1 > num2) return 1; // v1 比 v2 大
    if (num1 < num2) return -1; // v2 比 v1 大
  }
  return 0;
}
