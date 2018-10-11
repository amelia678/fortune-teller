console.log('yep i am here');
// classes are for CSS Styling
// "data attributes" are for JS

// #1 make some code run when i click the button
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');
// function hello() {
//     ;
// } if function will only be used once, ok to use anonymous function

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
//  -a function that says what to do when the event happens
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    outputElement.textContent = 'grumpy grumpy grumpy cat';
});    

// #2 write some text to the page on button click


// #3 pull text from an array of text to write to the page.