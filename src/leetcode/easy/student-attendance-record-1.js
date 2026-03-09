var checkRecord = function (s) {
  let absentDaysCount = 0;
  let consecutiveLate = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'P') {
      continue;
    } else if (s[i] === 'A') {
      absentDaysCount++;
    } else {
      if (s[i - 1] === 'L') {
        consecutiveLate++;
      } else {
        consecutiveLate = 1;
      }
    }
    if (consecutiveLate >= 3) return false;
    if (absentDaysCount >= 2) return false;
  }

  return true;
};

console.log(checkRecord('PPALLL'));
