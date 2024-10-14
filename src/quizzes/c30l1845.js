export function solution(nums) {
  const count = nums.length / 2;

  const hash = {};
  for (const num of nums) {
    if (Object.keys(hash).length === count) return count;
    hash[num] = hash[num] ? hash[num] + 1 : 1;
  }

  return Object.keys(hash).length;
}
