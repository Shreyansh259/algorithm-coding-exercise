const isPalindromPossible = str => {
  let count = {};
  for (let s of str) {
    if (count[s]) {
      delete count[s];
    } else {
      count[s] = true;
    }
  }
  let leng = Object.keys(count).length;
  if (leng > 1) {
    return false;
  }
  return true;
};
