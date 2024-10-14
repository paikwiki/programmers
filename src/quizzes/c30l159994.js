export function solution(cards1, cards2, goal) {
  let currentIndexCard1 = 0;
  let currentIndexCard2 = 0;

  for (const currentGoal of goal) {
    switch (currentGoal) {
      case cards1[currentIndexCard1]:
        currentIndexCard1++;
        break;
      case cards2[currentIndexCard2]:
        currentIndexCard2++;
        break;
      default:
        return "No";
    }
  }

  return "Yes";
}
