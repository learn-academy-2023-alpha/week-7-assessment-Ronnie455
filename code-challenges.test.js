// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

//const { name } = require("ci-info")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Input: create a test with the given variables
// Output: create a function that will allow the test to pass
// First I'm going to create a jest test using the given array "people" and create a describe function "newArray" with it and expect statements.
// Next create a function called newArray that takes in an array of objects as its param
//use map to iterate over each object in the array
//create a new variable called "name" that replaces the first letter of each name with the capatalized version.
//return a sentence for each person using string interpolation
//


// a) Create a test with an expect statement using the variable provided.
describe("newArray", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" } ]

it("Takes an array of objects and return an array with a sentence about each person with their name capatalized", () => {
expect(newArray(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

//Output: ReferenceError: newArray is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const newArray = (people) => {
  return people.map((person) => {
    const name = person.name.replace(/\b\w/g, (word) => word.toUpperCase());
    // in the variable name I am using "person as the object" and the .replace method to remove the original letter and replace it with the capatalized version. bwg is matching and word characters that occur at the beginning of a word bondary (name) and g matches it globally. 
    return `${name} is ${person.occupation}.`
  });
}
//Output:  PASS  ./code-challenges.test.js
//   newArray
//   ✓ Takes an array of objects and return an array with a sentence about each person with their name capatalized (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Input: create a test using provided variables and create describe function called "jargon" and it statements
// Output: create a function outside of the test using the variable jargon that will allow the test to pass
// for the function to allow the test to pass it will need to use filter, typeof, and map methods.
// first pass a parameter for the variable called arr and return arr.filter to filter out all non-numeric values and ONLY return an array with numeric values.
// Can do this by setting the value to number using typeof
// Call on the map method in the filtered array that contains the value of the array % 3 and puts it into new array

// a) Create a test with an expect statement using the variables provided.
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
describe("jargon", () => {
it("takes in a mixed data array and returns an array of only the remainders of the numbers divided by 3", () => {
expect(jargon(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]),
expect(jargon(hodgepodge2)).toEqual([ 2, 1, -1 ])
//OUTPUT: ReferenceError: jargon is not defined
})
})

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

const jargon = (arr) => {
  return arr.filter(value => typeof value === 'number').map(value => value % 3);
}
console.log(jargon(hodgepodge1))
console.log(jargon(hodgepodge2))

// ✓ Takes an array of objects and return an array with a sentence about each person with their name capatalized (3 ms)
//   jargon
//     ✓ takes in a mixed data array and returns an array of only the remainders of the numbers divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Input: create a test using provided variables and create a describe function called "cubed" and create it and expect statements
// Output: create a function that will allow the test to pass
// Create a function outside of test called cubed that takes in an array of numbers as an argument
// use reduce method to iterate through each value of the array
// use acc as param which is the total sum of the previous iteration. Use val as second param which represents the value being processed.
// => acc + (val **3), 0) sets the accumulator to 0, iterates through array, computes the cube of current value and adds it to accumilator and returns final value of accumulator

// a) Create a test with an expect statement using the variables provided.
const cubeAndSum1 = [2, 3, 4]
const cubeAndSum2 = [0, 5, 10]
describe("cubed", () => {
it("the function takes in an array of numbers and returns the sum of the numbers cubed", () => {
  expect(cubed(cubeAndSum1)).toEqual(99);
  expect(cubed(cubeAndSum2)).toEqual(1125);
})
})
// Pre function test Output: ReferenceError: cubed is not defined
// cubeAndSum1 Expected output: 99
// cubeAndSum2 Expected output: 1125

// b) Create the function that makes the test pass.
const cubed = (arr) => {
  return arr.reduce((acc, val) => acc + (val ** 3), 0)
}
console.log(cubed(cubeAndSum1))
console.log(cubed(cubeAndSum2));

// Output: cubed
    // ✓ the function takes in an array of numbers and returns the sum of the numbers cubed

    // Test Suites: 1 passed, 1 total