export const testCases = [
  {
    input: [
      ["may", "kein", "kain", "radi"],
      [5, 10, 1, 3],
      [
        ["may", "kein", "kain", "radi"],
        ["may", "kein", "brin", "deny"],
        ["kon", "kain", "may", "coni"],
      ],
    ],
    output: [19, 15, 6],
  },
  {
    input: [
      ["kali", "mari", "don"],
      [11, 1, 55],
      [
        ["kali", "mari", "don"],
        ["pony", "tom", "teddy"],
        ["con", "mona", "don"],
      ],
    ],
    output: [67, 0, 55],
  },
  {
    input: [
      ["may", "kein", "kain", "radi"],
      [5, 10, 1, 3],
      [["may"], ["kein", "deny", "may"], ["kon", "coni"]],
    ],
    output: [5, 15, 0],
  },
];
