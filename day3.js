// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
let number1 = 10; // Change this value to test different cases

if (number1 > 0) {
    console.log(" The number is positive.");
} else if (number1 < 0) {
    console.log("The number is negative.");
} else {
    console.log(" The number is zero.");
}

// Output: The number is positive.

// Task 2: Check if a person is eligible to vote
let age = 20; // Change this value to test different cases

if (age >= 18) {
    console.log(" The person is eligible to vote.");
} else {
    console.log(" The person is not eligible to vote.");
}

// Output: The person is eligible to vote.


// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers using nested if-else statements
let a = 10;
let b = 20;
let c = 30;

if (a >= b) {
    if (a >= c) {
        console.log(" The largest number is " + a);
    } else {
        console.log(" The largest number is " + c);
    }
} else {
    if (b >= c) {
        console.log(" The largest number is " + b);
    } else {
        console.log(" The largest number is " + c);
    }
}

// Output: The largest number is 30.


// Activity 3: Switch Case

// Task 4: Determine the day of the week based on a number (1-7)
let dayNumber = 3; // Change this value to test different cases
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
        break;
}

console.log(" The day is " + dayName);

// Output: The day is Tuesday.

// Task 5: Assign a grade based on a score
let score = 85; // Change this value to test different cases
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}

console.log(" The grade is " + grade);

// Output: The grade is B.


// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd using the ternary operator
let num = 7; // Change this value to test different cases
let result1 = (num % 2 === 0) ? "even" : "odd";

console.log(" The number is " + result1);

// Output: The number is odd.


// Activity 5: Combining Conditions

// Task 7: Check if a year is a leap year using multiple conditions
let year = 2024; // Change this value to test different cases
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
    console.log(" The year is a leap year.");
} else {
    console.log(" The year is not a leap year.");
}

// Output: The year is a leap year.
