// Activity 1: Basic Error Handling with Try-Catch

// Task 1
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError();
} catch (error) {
    // Output: Caught an error: This is an intentional error
    console.error("Caught an error:", error.message);
}

// Task 2
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    // Output: Error: Denominator cannot be zero
    console.error("Error:", error.message);
}

// Activity 2: Finally Block

// Task 3
try {
    console.log("In the try block"); // Output: In the try block
    throw new Error("An error occurred");
} catch (error) {
    // Output: Caught an error: An error occurred
    console.error("Caught an error:", error.message);
} finally {
    // Output: In the finally block
    console.log("In the finally block");
}

// Activity 3: Custom Error Objects

// Task 4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    // Output: Caught a custom error: This is a custom error
    console.error(`Caught a custom error: ${error.message}`);
}

// Task 5
function validateInput(input) {
    if (input.trim() === "") {
        throw new CustomError("Input cannot be empty");
    }
    return "Valid input";
}

try {
    console.log(validateInput("Hello")); // Output: Valid input
    console.log(validateInput(""));      // This will throw a custom error
} catch (error) {
    // Output: Caught a custom error: Input cannot be empty
    console.error(`Caught a custom error: ${error.message}`);
}

// Activity 4: Error Handling in Promises

// Task 6
const randomPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        success ? resolve("Promise resolved") : reject(new Error("Promise rejected"));
    }, 1000);
});

randomPromise
    .then(result => {
        // Output if resolved: Promise resolved
        console.log(result);
    })
    .catch(error => {
        // Output if rejected: Caught a promise error: Promise rejected
        console.error(`Caught a promise error: ${error.message}`);
    });

// Task 7
async function handleRandomPromise() {
    try {
        const result = await randomPromise;
        // Output if resolved: Promise resolved
        console.log(result);
    } catch (error) {
        // Output if rejected: Caught an async promise error: Promise rejected
        console.error(`Caught an async promise error: ${error.message}`);
    }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8
fetch("https://invalid-url")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch(error => {
        // Output: Caught a fetch error: Failed to fetch
        console.error(`Caught a fetch error: ${error.message}`);
    });

// Task 9
async function fetchInvalidURL() {
    try {
        const response = await fetch("https://invalid-url");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Output: Caught an async fetch error: Network response was not ok
        console.error(`Caught an async fetch error: ${error.message}`);
    }
}

fetchInvalidURL();
