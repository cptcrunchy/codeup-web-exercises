// Line 2 is used so we can reference the functions in functions.js
var {sayHello, isTwo} = require('./functions')
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
 */
test("Say hello Jason", function() {
    var myName = "Jason";
    expect(sayHello(myName)).toBe("Hello, Jason");
})

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
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
