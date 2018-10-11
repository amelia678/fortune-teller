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



let index = 0;
// function hello() {
//     ;
// } if function will only be used once, ok to use anonymous function

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
//  -a function that says what to do when the event happens
// let randomFortune = fortunes[Math.floor(Math.random()* fortunes.length)];
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    let newFortune = fortunes[Math.floor(Math.random()* fortunes.length)];
    outputElement.textContent= newFortune;
    index++;
    if (index > fortunes.length - 1) {
        index = 0;
    }
    
    
});   

const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement2 = document.querySelector('[data-output]');

const proTips = [
    "Save money on Christmas presents by discussing politics on social media",
    "If somebody you know has a weird laugh, tell them so they know not to laugh again",
    "Speak twice before you think",
    "If you can't think of a word, say 'I forget the English word for it'. That way people will think you're bilingual instead of an idiot",
    "If your car is making weird noises just turn the music volume up and will no longer be a problem",
    "Slow blink every 3 seconds to effortlessly spread your sleep out through the day"

];


triggerElement2.addEventListener('click', function () {
    console.log('Guten tag');
    let newLifeTip = proTips[Math.floor(Math.random()*proTips.length)];
    outputElement.textContent = newLifeTip
    index++;
    if (index > proTips.length - 1) {
        index = 0;
    }
});

// #2 write some text to the page on button click


// #3 pull text from an array of text to write to the page.