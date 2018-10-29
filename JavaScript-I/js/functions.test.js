// Line 2 is used so we can reference the function in functions.js
var sayHello = require('./functions')
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

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a test for the 'isTwo' function that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

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
