const solution = (tree) => {
  if (tree.length === 0) return 0;
  let exp = 1;
  let addedThisExp = false;
  let height = 1;
  for (let i = 1; i < tree.length; i++) {
    if (i === 2 ** exp + 1) {
      exp++;
      addedThisExp = false;
    }
    if (tree[i] !== -1 && !addedThisExp) {
      height++;
      addedThisExp = true;
    }
  }
  return height;
};

console.log(solution([1, 1, 1]));
