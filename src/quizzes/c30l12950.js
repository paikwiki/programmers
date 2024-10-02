export function solution(arr1, arr2) {
  const result = [];

  for (let outerIdx = 0; outerIdx < arr1.length; outerIdx++) {
    let arr = [];
    for (let innerIdx = 0; innerIdx < arr1[0].length; innerIdx++) {
      arr.push(arr1[outerIdx][innerIdx] + arr2[outerIdx][innerIdx]);
    }
    result.push(arr);
  }

  return result;
}
