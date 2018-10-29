// Line 2 is used so we can reference the functions in functions.js
var {sayHello, isTwo, calculateTip, applyDiscount} = require('./functions')
/**
 * TODO:
 * Create a test for the function 'sayHello' and pass "codeup" as a string literal argument.
 */
test("Say hello Codeup", function() {
    expect(sayHello("Codeup")).toBe("Hello, Codeup");
});

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to a second test using the 'sayHello' function.
 * * Example
 * > sayHello("James") // returns "Hello, James"
 */
test("Say hello Jason", function() {
    var myName = "Jason";
    expect(sayHello(myName)).toBe("Hello, Jason");
});

/**
 * TODO:
 * Create 3 tests for the 'isTwo' function that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */
test("one is not two", function() {
    expect(isTwo(1)).toBe(false);
});

test("two is two", function() {
    expect(isTwo(2)).toBe(true);
});

test("three is not two", function() {
    expect(isTwo(3)).toBe(false);
});

test("string '2' is not integer 2", function() {
    expect(isTwo("2")).toBe(false);
});

/**
 * TODO:
 * Create 3 tests for the function 'calculateTip'.
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
test("tip should be 4", function() {
    expect(calculateTip(0.20, 20)).toBeCloseTo(4);
});

test("tip should be 6.37", function() {
    expect(calculateTip(0.25, 25.50)).toBeCloseTo(6.37);
});

test("tip should be 5.01", function() {
    expect(calculateTip(0.15, 33.42)).toBeCloseTo(5.01);
});

/**
 * TODO:
 * Create 3 tests for the function `applyDiscount`.
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
test("Discounted price should be 40.47", function() {
    expect(applyDiscount(45.99, 0.12)).toBeCloseTo(40.47);
});

test("Discounted price should be 9.89", function() {
    expect(applyDiscount(10.99, 0.1)).toBeCloseTo(9.89);
});