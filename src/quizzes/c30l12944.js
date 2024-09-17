// https://school.programmers.co.kr/learn/courses/30/lessons/12944

export function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
