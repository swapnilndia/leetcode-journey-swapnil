var longestCommonPrefix = function (strs) {
  let commomPrefix = '';
  let firstWord = strs[0];
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return commomPrefix;
      }
    }
    commomPrefix = commomPrefix + firstWord[i];
  }
  return commomPrefix;
};

const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
