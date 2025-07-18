var findRelativeRanks = function (score) {
  const arr = new Array(score.length);
  const sorted = [...score].sort((a, b) => b - a);
  const titles = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  for (let i = 0; i < sorted.length; i++) {
    const index = score.indexOf(sorted[i]);
    if (i < 3) {
      arr[index] = titles[i];
    } else {
      arr[index] = (i + 1).toString();
    }
  }

  return arr;
};
