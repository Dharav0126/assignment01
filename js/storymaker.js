// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector('#noun1');
const verb = document.querySelector('#verb');
const adjective = document.querySelector('#adjective');
const noun2 = document.querySelector('#noun2');
const setting = document.querySelector('#setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector('#choosenNoun1');
const choosenVerb = document.querySelector('#choosenVerb');
const choosenAdjective = document.querySelector('#choosenAdjective');
const choosenNoun2 = document.querySelector('#choosenNoun2');
const choosenSetting = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playback = document.querySelector('#playback');
const random = document.querySelector('#random');

// Variables for pre-defined arrays
let noun1array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let verbarray = ["sat on", "ate", "dance with", "saw", "doesn't like", "kissed"];
let adjectivearray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let noun2array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settingarray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1count = "";
let verbcount = "";
let adjectivecount = "";
let noun2count = "";
let settingcount = "";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1count = noun1array[Math.floor(Math.random()*6)];
    choosenNoun1.textContent = noun1count;
    // if-else to change count setting
}

function verb_on_click() {
    verbcount = verbarray[Math.floor(Math.random()*6)];
    choosenVerb.textContent = verbcount;
}

function adjective_on_click() {
    adjectivecount = adjectivearray[Math.floor(Math.random()*6)];
    choosenAdjective.textContent = adjectivecount;
}

function noun2_on_click() {
    noun2count = noun2array[Math.floor(Math.random()*6)];
    choosenNoun2.textContent = noun2count;
}

function setting_on_click() {
    settingcount = settingarray[Math.floor(Math.random()*6)];
    choosenSetting.textContent = settingcount;
}

// concatenate the user story and display
function playback_on_click() { 
    story.textContent = noun1count + " " + verbcount + " " + adjectivecount + " " + noun2count + " " + settingcount;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    story.textContent = noun1count + " " + verbcount + " " + adjectivecount + " " + noun2count + " " + settingcount;
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener('click', noun1_on_click)
verb.addEventListener('click', verb_on_click);
adjective.addEventListener('click', adjective_on_click);
noun2.addEventListener('click', noun2_on_click);
setting.addEventListener('click', setting_on_click);
playback.addEventListener('click', playback_on_click);
random.addEventListener('click', random_on_click);