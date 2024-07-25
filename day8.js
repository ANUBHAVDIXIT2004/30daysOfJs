// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`); 
// Output: My name is John and I am 25 years old.

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString); 
/* Output:
This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.
*/


// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first, second); 
// Output: 10 20

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = { title: "1984", author: "George Orwell", year: 1949 };
const { title, author } = book;
console.log(title, author); 
// Output: 1984 George Orwell


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray); 
// Output: [1, 2, 3, 4, 5, 6]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 
// Output: 15


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); 
// Output: 10
console.log(multiply(5));    
// Output: 5


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const enhancedObject = {
    property1: 'value1',
    property2: 'value2',
    method1() {
        console.log('This is a method.');
    }
};
console.log(enhancedObject); 
// Output: { property1: 'value1', property2: 'value2', method1: [Function: method1] }
enhancedObject.method1(); 
// Output: This is a method.

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = 'name';
const key2 = 'age';
const computedObject = {
    [key1]: 'Alice',
    [key2]: 30
};
console.log(computedObject); 
// Output: { name: 'Alice', age: 30 }
