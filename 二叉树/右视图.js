const rightSideView = function (root) {
  if (root === null) return [];
  const res = [];
  const q = [root];
  while (q.length) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const cur = q.shift();
      if (cur.left !== null) q.push(cur.left);
      if (cur.right !== null) q.push(cur.right);
      if (i === sz - 1) res.push(cur.val);
    }
  }
  return res;
};
