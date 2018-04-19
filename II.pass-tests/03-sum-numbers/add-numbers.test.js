var addAllnumbers = require("./add-numbers");

test("Add all numbers", function() {
  var numbers = [9, 23, 10, 8];
  var expected = 50;

  var output = addAllnumbers(numbers);

  expect(output).toEqual(expected);
});
