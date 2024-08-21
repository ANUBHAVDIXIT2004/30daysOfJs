//activity 1 

//task1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    throw new Error("No two sum solution");
};

// Example Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]


//activity 2

//task2

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let reversed = 0;
    
    x = Math.abs(x);
    
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    
    if (reversed > 2**31 - 1) {
        return 0; // Return 0 if the reversed integer overflows
    }
    
    return isNegative ? -reversed : reversed;
};

// Example Test Cases
console.log(reverse(123));  // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120));  // Output: 21
console.log(reverse(0));    // Output: 0

//activity 3

//task3

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }
    
    // Initialize reversed number and original number
    let original = x;
    let reversed = 0;
    
    // Reverse the digits of the number
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    
    // Check if the original number is equal to the reversed number
    return original === reversed;
};

// Example Test Cases
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false
console.log(isPalindrome(12321)); // Output: true


//activity 4

//task4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to serve as the starting point of the merged list
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Iterate through both lists until one of them is empty
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach the remaining elements from either list1 or list2
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Return the merged list starting from the first element after the dummy node
    return dummy.next;
};

// Helper function to create linked lists for testing
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Example Test Cases
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);

// Function to print linked list
function printList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join(" -> "));
}

printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4


//activity 5

//task5

const stack = [];
    const mapping = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
        if (mapping[char]) {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket
            const topElement = stack.pop();
            // Check if the top element matches the corresponding opening bracket
            if (mapping[topElement] !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all brackets are matched correctly
    return stack.length === 0;
    
