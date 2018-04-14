var greetPeople = require("./greet-people");

test("print hi + names", function() {
  // Arrange
  var mentors = ["irina", "asleigh", "etza"];

  // Act
  var result = greetPeople(mentors);

  // Assert
  expect(result).toEqual("Hi irinaasleighetza");
});
