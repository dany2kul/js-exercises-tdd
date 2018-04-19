module.exports = addOne;

function addOne(numbers) {
  return numbers.map(addOneToElement);
}

function addOneToElement(number) {
  return number + 1;
}
