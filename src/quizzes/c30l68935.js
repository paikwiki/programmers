// https://stackoverflow.com/questions/38372658/why-does-javascript-number-function-return-wrong-value-for-this-number
// https://school.programmers.co.kr/questions/13875

export function solution(n) {
  const decimalToTernary = (num) => {
    const tempArr = [];

    let curr = num;
    while (curr >= 3) {
      tempArr.push(curr % 3);
      curr = Math.floor(curr / 3);
    }
    if (curr !== 0) tempArr.push(curr);

    return BigInt(tempArr.reverse().join(""));
  };

  const reverseDigits = (num) => BigInt(`${num}`.split("").reverse().join(""));

  const ternaryToDecimal = (num) => {
    const reversed = `${num}`
      .split("")
      .reverse()
      .map((i) => parseInt(i));

    let result = reversed[0];
    let index = 1;
    while (index < reversed.length) {
      result += reversed[index] * 3 ** index;
      index++;
    }

    return result;
  };

  const pipe =
    ([fn, ...fns]) =>
    (value) =>
      fns.length > 0 ? pipe(fns)(fn(value)) : fn(value);

  return pipe([decimalToTernary, reverseDigits, ternaryToDecimal])(n);
}
