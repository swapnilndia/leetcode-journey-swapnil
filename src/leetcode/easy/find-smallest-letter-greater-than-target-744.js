var nextGreatestLetter = function (letters, target) {
  const targetASCIIVal = target.charCodeAt(0);
  let output = letters[0].charCodeAt(0);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) <= targetASCIIVal) {
      continue;
    } else {
      if (
        output > letters[i].charCodeAt(0) ||
        (output <= targetASCIIVal && output < letters[i].charCodeAt(0))
      ) {
        output = letters[i].charCodeAt(0);
      }
    }
  }
  return String.fromCharCode(output);
};

// nextGreatestLetter(["c","f","j"])
console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
