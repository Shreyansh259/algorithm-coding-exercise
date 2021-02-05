const longestPalindrom = str => {
  let low,
    high,
    maxlength = 1,
    start = 0;

  for (let i = 1; i < str.length; i++) {
    low = i - 1;
    high = i;
    while (low >= 0 && high < str.length && str[low] === str[high]) {
      let len = high - low + 1;
      if (len > maxlength) {
        maxlength = len;
        start = low;
      }
      low--;
      high++;
    }
  }
  let end = start + maxlength;
  return str.substring(start, end);
};
