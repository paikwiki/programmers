export function solution(new_id) {
  const trimDot = (str, pos) => {
    if (pos === "start") return str[0] === "." ? str.slice(1) : str;

    if (str[str.length - 1] === ".") return str.slice(0, str.length - 1);

    return str;
  };

  let result = new_id
    .toLowerCase()
    .split("")
    .filter(
      (item) =>
        ("a" <= item && item <= "z") ||
        ("0" <= item && item <= "9") ||
        ["-", "_", "."].includes(item)
    )
    .join("")
    .replace(/\.+/g, ".");
  result = trimDot(result, "start");
  result = trimDot(result, "end");
  if (result.length === 0) result = "a";
  if (result.length > 15) result = result.slice(0, 15);
  result = trimDot(result, "end");

  if (result.length > 2) return result;

  const suffix = result[result.length - 1];
  while (result.length < 3) {
    result = result + suffix;
  }

  return result;
}
