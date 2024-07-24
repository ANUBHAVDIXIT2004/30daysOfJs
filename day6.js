// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = arr[0];
const lastElement = arr[arr.length - 1];
console.log(firstElement); // Output: 1
console.log(lastElement); // Output: 5

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledArray = arr.map(num => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenArray = arr.filter(num => num % 2 === 0);
console.log(evenArray); // Output: [2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Output: 
// 1
// 2
// 3
// 4
// 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(num => console.log(num));
// Output: 
// 1
// 2
// 3
// 4
// 5

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][1]; // Accessing the element at row 2, column 2 (0-based index)
console.log(specificElement); // Output: 5
