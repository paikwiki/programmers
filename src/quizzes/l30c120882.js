export function solution(score) {
  const averages = score.map(([s1, s2], idx) => ({
    index: idx,
    score: (s1 + s2) / 2,
  }));
  const sorted = averages.sort((lhs, rhs) => (lhs.score < rhs.score ? 1 : -1));

  let tempRank = 0;
  const ranked = sorted.map((item, idx) => {
    const currentRank = idx + 1;

    if (sorted[idx - 1] !== undefined && item.score === sorted[idx - 1].score) {
      return {
        ...item,
        rank: tempRank,
      };
    }
    tempRank = currentRank;

    return {
      ...item,
      rank: currentRank,
    };
  });

  const resorted = ranked.sort((lhs, rhs) => (lhs.index < rhs.index ? -1 : 1));

  return resorted.map(({ rank }) => rank);
}
