export function solution(phone_number) {
  const maskLength = phone_number.length - 4;

  return phone_number
    .split("")
    .map((char, index) => (index < maskLength ? "*" : char))
    .join("");
}
