// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling

// . Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector("button").addEventListener("click",()=>{
    document.querySelector("p").innerText = "Hello, World!";
});

// · Task 2: Add a double-click event listener to an image that toggles its visibility.
document.querySelector("img").addEventListener("dblclick",()=>{
    const img = document.querySelector("img");
    img.style.visibility = (img.style.visibility === "hidden") ? "visible" : "hidden";
});


// Activity 2: Mouse Events
// . Task 3: Add a mouseover event listener to an element that changes its background color.
document.querySelector("h1").addEventListener("mouseover",()=>{
    document.querySelector("h1").style.backgroundColor = "red";
});

// . Task 4: Add a mouseout event listener to an element that resets its background color.
document.querySelector("h1").addEventListener("mouseout",()=>{
    document.querySelector("h1").style.backgroundColor = "blue";
});

// Activity 3: Keyboard Events
// . Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.querySelector("input");
input.addEventListener("keydown",(event)=>{
    console.log(event.key);
});

// . Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const para = document.getElementById("para");
input.addEventListener("keyup",(event)=>{
    para.innerText = event.target.value;
});


// Activity 4: Form Events
// . Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('exampleForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log(formObject);
});

// . Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown = document.getElementById("dropdown");
const display = document.getElementById("displayParagraph");
dropdown.addEventListener("change", (event) => {
    display.innerText = event.target.value;
});

// Activity 5: Event Delegation
// . Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.querySelector("ul");
ul.addEventListener('click', (event) => {
    console.log(event);
});

// . Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.body.addEventListener('click', (event) => {
    if (event.target && event.target.matches(".dynamic-child")) {
        console.log(`Dynamically added element clicked: ${event.target.textContent}`);
    }
});

// Example of adding a dynamic child element to demonstrate Task 10
const newListItem = document.createElement("li");
newListItem.className = "dynamic-child";
newListItem.textContent = "Dynamically Added Activity";
ul.appendChild(newListItem);