// contentScript.js

// Create a new button element
const button = document.createElement('button');

// Set the button's text
button.innerText = 'Click Me!';

// Add some styles to the button
button.style.position = 'fixed';
button.style.bottom = '10px';
button.style.right = '10px';
button.style.zIndex = '1000';

// Add an event listener to the button
button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Append the button to the body of the web page
document.body.appendChild(button);
