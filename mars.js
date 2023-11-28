alert("Hello!");

alert("Starting your Mars Adventure!");

alert("Booting up…");

alert("All systems go!");

alert("Let’s start!");

const username = prompt("Hi, there. What's your name?");

// prompt("Hi, there. What's your name?");


alert(`Hi, ${username} welcome to The Mars Adventure Game.`);

alert("Yesterday, you received a call from your good friend at NASA, They need someone to go to Mars this weekend, and YOU’VE been chosen!!");

let excited = prompt("Are you excited? (Type Y or N)");

excited = excited.toUpperCase();

if(excited === "Y"){
    alert("I knew you’d say that. It’s so cool that you’re going to Mars!");
}else if(excited === "N"){
    alert("Well, it’s too late to back out now.");
}else{
    alert("or you could ignore me!");
}

alert("It's time to pack for your trip to Mars.");

let numSuitcases = prompt("How many suitcases do you plan to bring?");

numSuitcases = Number(numSuitcases);

if(numSuitcases > 2){
    alert("That's way too many. You'll have to pack more lightly.");
}else{
    alert("Perfect. You’ll certainly fit in the spaceship!");
}

alert("You're allowed to bring one companion animal with you.");

const companionType = prompt("What kind of companion animal would you like to bring?");

let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];

firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);

otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

alert("NASA has a interior design team offering to outfit your space ship.");

alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt("Which decor would you prefer to use? A, B, or C?")


//questionable...
// let decor =  prompt("Which decor would you prefer to use? A, B, or C?")

let decor;

if(decorChoice === "A"){
    decor = "Sleek, modern minimalist"
}else if(decorChoice === "B"){
    decor = "Retro/vintage space age"
}else if(decorChoice === "C"){
    decor = "Victorian-era steampunk"
}else{
    decor = "Retro/vintage space age"
    alert("Defaulting your decor to: Retro/vintage space age");
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);