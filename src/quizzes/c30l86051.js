export function solution(numbers) {
  return Array(9)
    .fill(null)
    .reduce((acc, _, index) => {
      const num = index + 1;
      return numbers.includes(num) ? acc : acc + num;
    }, 0);
}
