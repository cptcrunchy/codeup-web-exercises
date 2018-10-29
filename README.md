# codeup-web-exercises (ReHash)

The following is a post-graduate look at the Codeup curriculum to introduce unit testing and TDD (Test Driven Development).
This repo will begin with JavaScript I (Functions) /javascript-i/functions

## Getting Started

Through out the JavaSCript modules we will be using Jest, v23.6, and below are the instructions on how to setup

Open a terminal and `cd` into your current project folder unless your current working folder is already open.

```shell
> pwd
> cptcrunchy/wwwroot/codeup-web-exercises
```

( Its ok if none of this currently makes any sense. We will break down what is happening.)
Install Jest using `yarn`:

`yarn add -D jest`

OR using `npm`:

`npm install --save-dev jest`

## Test setup and structure

Jest has a simple format on how to setup unit tests. Below is a breakdown of how tests are structured.

```javascript
    /*
        test("parm1", anonymous function(){
          expect( imported function(s) ).matchers("Expected output")  
        })
    */
    test("Test Description", function() {
        expect( myFunction("input") ).toBe("output");
    });
    // Alternative ES6 Setup
    test("Test Description", () => expect( myFunction("input") ).toBe("output"));
```

The test function takes 2 parameters. A string which describes what scenario will be tested.
The description should be brief and make sense, i.e., "Say Hello to Codeup"

The next parameter is a callback function.
This callback function invokes one method, `expect()`.
Inside of the `expect` method we pass in our imported function and add a matcher function using
dot notation. In our example we use `.toBe("Expected Output")`

the string "Expected Output" can be a string, array, object, integer or boolean value. For other
examples on using Matchers reference the Jest docs: [HERE](https://jestjs.io/docs/en/using-matchers)
