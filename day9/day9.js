// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content
document.getElementById('myElement').textContent = 'New text content';
// Output: The text content of the element with ID 'myElement' is changed to 'New text content'.

// Task 2: Select an HTML element by its class and change its background color
document.querySelector('.myClass').style.backgroundColor = 'blue';
// Output: The background color of the first element with class 'myClass' is changed to blue.

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);
// Output: A new div element with text 'This is a new div' is appended to the body.

// Task 4: Create a new li element and add it to an existing ul list
const newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.querySelector('ul').appendChild(newLi);
// Output: A new li element with text 'New list item' is added to the existing ul list.

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM
const elementToRemove = document.getElementById('elementToRemove');
if (elementToRemove) {
  elementToRemove.parentNode.removeChild(elementToRemove);
}
// Output: The element with ID 'elementToRemove' is removed from the DOM.

// Task 6: Remove the last child of a specific HTML element
const parentElement = document.getElementById('parentElement');
if (parentElement && parentElement.lastChild) {
  parentElement.removeChild(parentElement.lastChild);
}
// Output: The last child of the element with ID 'parentElement' is removed from the DOM.

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
const imgElement = document.getElementById('myImage');
if (imgElement) {
  imgElement.setAttribute('src', 'newImageSrc.jpg');
}
// Output: The src attribute of the img element with ID 'myImage' is changed to 'newImageSrc.jpg'.

// Task 8: Add and remove a CSS class to/from an HTML element
const element = document.querySelector('.myClassToToggle');
if (element) {
  element.classList.add('newClass');
  element.classList.remove('oldClass');
}
// Output: The class 'newClass' is added and the class 'oldClass' is removed from the element with class 'myClassToToggle'.

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('myParagraph').textContent = 'Text changed on click';
});
// Output: The text content of the paragraph with ID 'myParagraph' is changed to 'Text changed on click' when the button with ID 'myButton' is clicked.

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById('hoverElement').addEventListener('mouseover', function() {
  this.style.borderColor = 'red';
});
// Output: The border color of the element with ID 'hoverElement' is changed to red when it is hovered over