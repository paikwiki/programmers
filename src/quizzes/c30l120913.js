export function solution(my_str, n) {
  const result = [];

  let temp = "";
  for (let idx = 0; idx < my_str.length; idx++) {
    if (idx !== 0 && idx % n === 0) {
      result.push(temp);
      temp = my_str[idx];
    } else {
      temp += my_str[idx];
    }
  }
  result.push(temp);

  return result;
}
