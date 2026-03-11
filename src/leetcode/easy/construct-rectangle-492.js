var constructRectangle = function (area) {
  let maxWidth = Math.floor(Math.sqrt(area));
  for (let i = maxWidth; i >= 0; i--) {
    if (area % i === 0) {
      maxWidth = i;
      break;
    }
  }
  return [area / maxWidth, maxWidth];
};

console.log(constructRectangle(37));
