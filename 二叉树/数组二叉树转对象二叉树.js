function treeToArray(root) {
  if (root == null) return [];
  const res = [];
  const queue = [{ node: root, index: 0 }];
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const { node, index } = queue.shift();
      res[index] = node.value;
      if (node.left) queue.push({ node: node.left, index: index * 2 + 1 });
      else if (node.right) res[index * 2 + 1] = null;
      if (node.right) queue.push({ node: node.right, index: index * 2 + 2 });
      else if (node.left) res[index * 2 + 2] = null;
    }
  }
  return res;
}
