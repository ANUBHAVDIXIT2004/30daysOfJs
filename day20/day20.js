// Activity 1: Understanding LocalStorage

// Task 1: Save and retrieve a string value from localStorage
localStorage.setItem('myString1', 'Hello, LocalStorage!');
const retrievedString1 = localStorage.getItem('myString1');
console.log('Retrieved string (Task 1):', retrievedString1);

// Task 2: Save and retrieve an object from localStorage
const myObject2 = { name: 'Anubhav', age: 19 };
localStorage.setItem('myObject2', JSON.stringify(myObject2));
const retrievedObject2 = JSON.parse(localStorage.getItem('myObject2'));
console.log('Retrieved object (Task 2):', retrievedObject2);

// Activity 2: Using LocalStorage

// Task 3: Save form data to localStorage
document.getElementById('localStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name3 = document.getElementById('localName').value;
    const email3 = document.getElementById('localEmail').value;
    localStorage.setItem('localName3', name3);
    localStorage.setItem('localEmail3', email3);
    displayLocalStorageData3();
});

// Display saved data on page load
function displayLocalStorageData3() {
    const name3 = localStorage.getItem('localName3');
    const email3 = localStorage.getItem('localEmail3');
    document.getElementById('localStorageData').textContent = `Name: ${name3}, Email: ${email3}`;
}
displayLocalStorageData3();

// Task 4: Remove an item from localStorage
console.log('Before removal (Task 4):', localStorage);
localStorage.removeItem('localName3');
console.log('After removal (Task 4):', localStorage);

// Activity 3: Understanding SessionStorage

// Task 5: Save and retrieve a string value from sessionStorage
sessionStorage.setItem('mySessionString5', 'Hello, SessionStorage!');
const retrievedSessionString5 = sessionStorage.getItem('mySessionString5');
console.log('Retrieved session string (Task 5):', retrievedSessionString5);

// Task 6: Save and retrieve an object from sessionStorage
const mySessionObject6 = { name: 'Kunal', age: 20 };
sessionStorage.setItem('mySessionObject6', JSON.stringify(mySessionObject6));
const retrievedSessionObject6 = JSON.parse(sessionStorage.getItem('mySessionObject6'));
console.log('Retrieved session object (Task 6):', retrievedSessionObject6);

// Activity 4: Using SessionStorage

// Task 7: Save form data to sessionStorage
document.getElementById('sessionStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name7 = document.getElementById('sessionName').value;
    const email7 = document.getElementById('sessionEmail').value;
    sessionStorage.setItem('sessionName7', name7);
    sessionStorage.setItem('sessionEmail7', email7);
    displaySessionStorageData7();
});

// Display saved data on page load
function displaySessionStorageData7() {
    const name7 = sessionStorage.getItem('sessionName7');
    const email7 = sessionStorage.getItem('sessionEmail7');
    document.getElementById('sessionStorageData').textContent = `Name: ${name7}, Email: ${email7}`;
}
displaySessionStorageData7();

// Task 8: Remove an item from sessionStorage
console.log('Before session removal (Task 8):', sessionStorage);
sessionStorage.removeItem('sessionName7');
console.log('After session removal (Task 8):', sessionStorage);

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Save to both localStorage and sessionStorage
function saveToBothStorages9(key9, value9) {
    localStorage.setItem(key9, value9);
    sessionStorage.setItem(key9, value9);
    console.log(`LocalStorage value for ${key9} (Task 9):`, localStorage.getItem(key9));
    console.log(`SessionStorage value for ${key9} (Task 9):`, sessionStorage.getItem(key9));
}
saveToBothStorages9('myKey9', 'myValue9');

// Task 10: Clear all data from both storages
function clearAllStorages10() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage cleared (Task 10):', localStorage);
    console.log('SessionStorage cleared (Task 10):', sessionStorage);
}
clearAllStorages10();
