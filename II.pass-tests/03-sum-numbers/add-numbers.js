function addNumbers(numbers) {
  var total = 0;
  numbers.forEach(function(number) {
    total = total + number;
  });
  return total;
}
module.exports = addNumbers;
