'use strict';

let score = 0;

let username = prompt('Welcome! What is your name?');
//console.log(`username = ${username}`);
alert(`Hello ${username}! Welcome to my About Me page.`);
alert('We are going to play a guessing game. Please answer \'yes\' or \'no\'. (y/n)');

let answerOne = prompt('Do I have a family?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){
  //console.log('Yes, I do. I have both my parents and two younger sisters.');
  alert('Yes, I do. I have both my parents and two younger sisters.');
}else if(answerOne === 'no' || answerOne === 'n'){
  //console.log('Sorry, I do. I have both my parents and two younger sisters.');
  alert('Sorry, I do. I have both my parents and two younger sisters.');
}

let answerTwo = prompt('Do I have a pet?').toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y'){
  //console.log('That\'s right! I have a dog named Rusty.');
  alert('That\'s right! I have a dog named Rusty.');
}else if(answerTwo === 'no' || answerTwo === 'n'){
  //console.log('Sorry, that\'s not right. I have a dog and his name is Rusty.');
  alert('Sorry, that\'s not right. I have a dog and his name is Rusty.');
}

let answerThree = prompt('Do I live in Washington?').toLowerCase();
if(answerThree === 'yes' || answerThree === 'y'){
  //console.log('Nope! You would have been right a couple weeks ago, but I actually just moved to Maine.');
  alert('Nope! You would have been right a couple weeks ago, but I actually just moved to Maine.');
}else if(answerThree === 'no' || answerThree === 'n'){
  //console.log('You\'re right. I did live in Washington, but I just recently moved to Maine.');
  alert('You\'re right. I did live in Washington, but I just recently moved to Maine.');
}

let answerFour = prompt('Do I like video games?').toLowerCase();
if(answerFour === 'yes' || answerFour === 'y'){
  //console.log('For sure! I really like video games and play quite a bit when I can.');
  alert('For sure! I really like video games and play quite a bit when I can.');
}else if(answerFour === 'no' || answerFour === 'n'){
  //console.log('Sorry that\'s not right. I actually like video games a lot.');
  alert('Sorry that\'s not right. I actually like video games a lot.');
}

let answerFive = prompt('Do I have a job right now?').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y'){
  //console.log('No, not really. Maybe you could count this class as my job, but I quit to learn coding.');
  alert('No, not really. Maybe you could count this class as my job, but I quit to learn coding.');
}else if(answerFive === 'no' || answerFive === 'n'){
  //console.log('That\'s right. I quit my job to do Code Fellows and become a software developer.');
  alert('That\'s right. I quit my job to do Code Fellows and become a software developer.');
}
for(let i = 4; i > 0; i--){
  let answerSix = parseInt(prompt('What is my favorite number? (Hint: it\'s a single digit.)'));
  if(answerSix === 8){
    alert('You got it!');
    score++;
  }else if(answerSix < 8){
    alert('That\'s too low.');
  }else if(answerSix > 8){
    alert('That\'s too high.');
  }else{
    alert('Sorry, you\'ve used all your guesses.');
  }
}


alert(`Thanks for playing ${username}! Your final score was ${score}.`);
