function findNeedle(words) {
  var i;
  for (i = 0; i < words.length; i++) {
    if (words[i] === "needle") {
      return i;
    }
  }
  return -1;
}
module.exports = findNeedle;
