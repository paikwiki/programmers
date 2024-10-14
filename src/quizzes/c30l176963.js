export function solution(name, yearning, photo) {
  const yearningMap = name.reduce(
    (acc, curr, index) => ({ ...acc, [curr]: yearning[index] }),
    {}
  );

  return photo.map((arr) =>
    arr.reduce((acc, curr) => acc + (yearningMap[curr] ?? 0), 0)
  );
}
