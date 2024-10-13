export function solution(n, arr1, arr2) {
  const dec2bin = (num) => num.toString(2).padStart(n, "0");
  const binArr2 = arr2.map(dec2bin);

  return arr1.map(dec2bin).map((item, index) => {
    const arr2 = binArr2[index].split("");

    return item
      .split("")
      .map((elem, idx) =>
        [elem, arr2[idx]].some((i) => i === "1") ? "#" : " "
      )
      .join("");
  });
}
