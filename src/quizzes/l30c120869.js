export function solution(spell, dic) {
  for (const word of dic) {
    const wordChars = word.split("");

    let spellResult = true;
    for (const char of spell) {
      if (spellResult === false) continue;

      spellResult =
        wordChars.includes(char) &&
        wordChars.filter((wc) => wc === char).length === 1;
    }

    if (spellResult === true) return 1;
  }

  return 2;
}
