function longestPalindrome(s: string): string {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = check(s, i, i);
    const s2 = check(s, i, i + 1);
    res = s1.length > res.length ? s1 : res;
    res = s2.length > res.length ? s2 : res;
  }
  return res;
}
function check(s: string, l: number, r: number): string {
  while (s[l] === s[r] && l >= 0 && r < s.length) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}
