// Activity 1: For Loop

// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Print the multiplication table of 5 using a for loop
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Activity 2: While Loop

// Calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum:", sum);

// Output:
// Sum: 55

// Print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do...While Loop

// Print numbers from 1 to 5 using a do...while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

// Calculate the factorial of a number using a do...while loop
let numberToFactorial = 5; // Change this number to calculate the factorial of a different number
let factorial = 1;
let l = 1;
do {
    factorial *= l;
    l++;
} while (l <= numberToFactorial);
console.log(`Factorial of ${numberToFactorial} is ${factorial}`);

// Output (for numberToFactorial = 5):
// Factorial of 5 is 120

// Activity 4: Nested Loops

// Print a pattern using nested for loops
let rows = 5;
for (let m = 1; m <= rows; m++) {
    let pattern = "";
    for (let n = 1; n <= m; n++) {
        pattern += "*";
    }
    console.log(pattern);
}

// Output:
// *
// **
// ***
// ****
// *****

// Activity 5: Loop Control Statements

// Print numbers from 1 to 10, but skip the number 5 using the continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Print numbers from 1 to 10 but stop the loop when the number is 7 using the break statement
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6