'use strict';

let username = prompt('Welcome! What is your name?');
alert(`Hello ${username}! Welcome to my About Me page.`);
alert('We are going to play a guessing game. Please answer \'yes\' or \'no\'.(y/n)');

let answerOne = prompt('Do I have a family?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){
  alert('A bit of a trick question. I do have a family, but I\'m not married. I have both my parents and two younger sisters.');
}else if(answerOne === 'no' || answerOne === 'n'){
  alert('Of course I have a family. I have both my parents and two younger sisters. I am not married though.');
}

let answerTwo = prompt('Do I have a pet?').toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('That\'s right! I have a dog named Rusty.');
}else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Sorry, that\'s not right. I have a dog and his name is Rusty.');
}

let answerThree = prompt('Do I live in Washington?').toLowerCase();
if(answerThree === 'yes' || answerThree === 'y'){
  alert('Nope! You would have been right a couple weeks ago, but I actually just moved to Maine.');
}else if(answerThree === 'no' || answerThree === 'n'){
  alert('You\'re right. I did live in Washington, but I just recently moved to Maine.');
}

let answerFour = prompt('Do I like video games?').toLowerCase();
if(answerFour === 'yes' || answerFour === 'y'){
  alert('For sure! I really like video games and play quite a bit when I can.');
}else if(answerFour === 'no' || answerFour === 'n'){
  alert('Sorry that\'s not right. I actually like video games a lot.');
}

let answerFive = prompt('Do I have a job right now?').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y'){
  alert('No, not really. Maybe you could count this class as my job, but I quit to learn coding.');
}else if(answerFive === 'no' || answerFive === 'n'){
  alert('That\'s right. I quit my job to do Code Fellows and become a software developer.');
}

alert(`Thanks for playing ${username}! I hope you had fun and learned a bit about me.`);
