var hasSameDigits = function (s) {
  while (s.length > 2) {
    let newString = '';
    for (let i = 0; i < s.length - 1; i++) {
      newString = newString + ((Number(s[i]) + Number(s[i + 1])) % 10);
    }
    s = newString;
  }

  return s[0] === s[1];
};

console.log(hasSameDigits('3902'));
