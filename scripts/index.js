console.log('yep i am here');
// classes are for CSS Styling
// "data attributes" are for JS

// #1 make some code run when i click the button
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

const fortunes = [
    "You will be hungry again in one hour",
    "I wish things had ended differently",
    "Even a broken clock is right two times a day",
    "Your resemblence to a muppet will prevent the world from taking you seriously",
    "Never gonna give you up, never gonna let you down, never gonna run around and dessert you"
];
// function hello() {
//     ;
// } if function will only be used once, ok to use anonymous function

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
//  -a function that says what to do when the event happens
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    outputElement.textContent = fortunes.pop();
});    

// #2 write some text to the page on button click


// #3 pull text from an array of text to write to the page.