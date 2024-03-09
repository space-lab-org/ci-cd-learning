const multiply = require ('./multiply.js');

//test case 1 - multiply 2 numbers
// syntax 1 with arrow function
test ('multiply 2 and 2 to equal 4', () => {
  expect(multiply(2,2)).toBe(4)
});

// syntax 2 with normal function
test ('multiply 6 and 2 to equals 12', function() {
  expect(multiply(6,2)).toBe(12)
});

test ('multiply 6 and 1 to equals 6', function() {
  expect(multiply(6,1)).toBe(12)
});