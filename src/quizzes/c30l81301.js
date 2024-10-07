export function solution(s) {
  const numbers = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let resultString = "";
  let curr = 0;
  while (curr < s.length) {
    if (Number.isNaN(parseInt(s[curr]))) {
      const sliced = s.slice(curr);
      for (const [key, value] of Object.entries(numbers)) {
        if (!sliced.startsWith(key)) continue;

        resultString += value;
        curr += key.length;
        break;
      }
    } else {
      resultString += s[curr];
      curr++;
    }
  }

  return parseInt(resultString);
}
