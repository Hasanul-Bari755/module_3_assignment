const findMaxNumber = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
};

console.log(findMaxNumber([45, 80, 90, 14, 12]));
