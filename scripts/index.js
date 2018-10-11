console.log('yep i am here');
// classes are for CSS Styling
// "data attributes" are for JS

// #1 make some code run when i click the button
const triggerElement = document.querySelector('[data-trigger]');

function hello() {
    console.log('Hello addEventListener!');
}

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
//  -a function that says what to do when the event happens
triggerElement.addEventListener('click', hello);

// #2 write some text to the page on button click

// #3 pull text from an array of text to write to the page.