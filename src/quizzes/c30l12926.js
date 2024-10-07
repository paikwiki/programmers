export function solution(s, n) {
  const bigAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const len = bigAlphabets.length;

  return s
    .split("")
    .map((char) => {
      if (char === " ") return char;

      const alphabets = bigAlphabets.includes(char)
        ? bigAlphabets
        : smallAlphabets;

      return alphabets[(alphabets.indexOf(char) + n) % len];
    })
    .join("");
}
