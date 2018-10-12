console.log('yep i am here');
// classes are for CSS Styling
// "data attributes" are for JS



// #1 make some code run when i click the button
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');
const outputElementimg = document.querySelector('[data-image]');                  


const fortunes = [
    { 
        text: "You will be hungry again in one hour" , 
        url: "https://images.pexels.com/photos/100733/pexels-photo-100733.jpeg?cs=srgb&dl=alarm-clock-clock-macro-100733.jpg&fm=jpg"
    },
   { 
       text: "I wish things had ended differently",
        url: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?cs=srgb&dl=adorable-animal-cat-127028.jpg&fm=jpg"
    },
    {
        text: "Even a broken clock is right two times a day",
        url: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?cs=srgb&dl=black-and-white-black-and-white-clocks-707676.jpg&fm=jpg"
    },
    {
        text: "Your resemblence to a muppet will prevent the world from taking you seriously",
        url: "https://images.pexels.com/photos/208166/pexels-photo-208166.jpeg?cs=srgb&dl=baby-blur-cat-208166.jpg&fm=jpg"
    },    
    {
        text: "Never gonna give you up, never gonna let you down, never gonna run around and dessert you",
        url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=adorable-animal-breed-1108099.jpg&fm=jpg"
    }
];



let index = 0;

function createFortuneButton() {
    const theButton = document.createElement('button');
    theButton.textContent= 'Click here to ruin your day';
    theButton.setAttribute('data-trigger', '');
    return theButton;
}

function createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // const theButton = createFortuneButton();
    // buttonContainer.appendChild(theButton);
    buttonContainer.appendChild(createFortuneButton());
    
    
    return buttonContainer;
}
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
    let newImage = fortunes[index].url
    outputElement.textContent= newFortune;
    outputElementimg.textContent= newImage;
    index++;
    if (index > fortunes.length - 1) {
        index = 0;
    }
    
    
});   

const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement2 = document.querySelector('[data-output]');

const proTips = [
    {
        text: "Save money on Christmas presents by discussing politics on social media",
        url: "#"
    },
    {
        text: "If somebody you know has a weird laugh, tell them so they know not to laugh again",
        url: "#"
    },
    {
        text: "Speak twice before you think",
        url: "#"
    },
   {
       text: "If you can't think of a word, say 'I forget the English word for it'. That way people will think you're bilingual instead of an idiot",
       url: "#"
    },
       
    {
        text: "If your car is making weird noises just turn the music volume up and will no longer be a problem",
        url: "#"
    },
    {
    text: "Slow blink every 3 seconds to effortlessly spread your sleep out through the day",
    url: "#"
    }
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