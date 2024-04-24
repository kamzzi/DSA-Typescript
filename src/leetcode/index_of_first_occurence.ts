function strStr(haystack: string, needle: string): number {
  let index = -1;

  let start = 0;
  let end = haystack.length - 1;
  let j = 0;

  while (start <= end) {
    if (haystack[start] === needle[j]) {
      j++;
    } else {
      start -= j;
      j = 0;
    }

    if (j === needle.length) {
      index = start - j + 1;
      break;
    }
    start++;
  }

  return index;
}
