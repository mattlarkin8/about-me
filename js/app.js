'use strict';

let score = 0;
let username='';

function guessingGame(){
  alert(`Hello ${getUserName()}! Welcome to my About Me page.`);
  alert('We are going to play a guessing game. Please answer \'yes\' or \'no\'. (y/n)');
  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();
  alert(`Thanks for playing ${username}! Your final score was ${score} out of 7.`);
}

function getUserName(){
  username = prompt('Welcome! What is your name?');
  //console.log(`username = ${username}`);
  return username;
}

function q1(){
  let answerOne = prompt('Do I have any siblings?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
    //console.log('Yes, I do. I have both my parents and two younger sisters.');
    alert('Yes, I do. I have both my parents and two younger sisters.');
    score++;
  } else if (answerOne === 'no' || answerOne === 'n') {
    //console.log('Nope, I do. I have both my parents and two younger sisters.');
    alert('Nope, I do. I have both my parents and two younger sisters.');
  }
}

function q2(){
  let answerTwo = prompt('Do I have a pet?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    //console.log('That\'s right! I have a dog named Rusty.');
    alert('That\'s right! I have a dog named Rusty.');
    score++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    //console.log('Sorry, that\'s not right. I have a dog and his name is Rusty.');
    alert('Sorry, that\'s not right. I have a dog and his name is Rusty.');
  }
}

function q3(){
  let answerThree = prompt('Do I live in Washington?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    //console.log('Nope! You would have been right a couple weeks ago, but I actually just moved to Maine.');
    alert('Nope! You would have been right a couple weeks ago, but I actually just moved to Maine.');
  } else if (answerThree === 'no' || answerThree === 'n') {
    //console.log('You\'re right. I did live in Washington, but I just recently moved to Maine.');
    alert('You\'re right. I did live in Washington, but I just recently moved to Maine.');
    score++;
  }
}

function q4(){
  let answerFour = prompt('Do I like video games?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    //console.log('For sure! I really like video games and play quite a bit when I can.');
    alert('For sure! I really like video games and play quite a bit when I can.');
    score++;
  } else if (answerFour === 'no' || answerFour === 'n') {
    //console.log('Sorry that\'s not right. I actually like video games a lot.');
    alert('Sorry that\'s not right. I actually like video games a lot.');
  }
}

function q5(){
  let answerFive = prompt('Do I have a job right now?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    //console.log('No, not really. Maybe you could count this class as my job, but I quit to learn coding.');
    alert('No, not really. Maybe you could count this class as my job, but I quit to learn coding.');
  } else if (answerFive === 'no' || answerFive === 'n') {
    //console.log('That\'s right. I quit my job to do Code Fellows and become a software developer.');
    alert('That\'s right. I quit my job to do Code Fellows and become a software developer.');
    score++;
  }
}

function q6() {
  for (let i = 0; i < 4; i++) {
    let answerSix = parseInt(prompt('What is my favorite number? (Hint: it\'s a single digit.)'));
    //console.log(`answerSix = ${answerSix}`);
    if (answerSix === 8) {
      alert('You got it!');
      score++;
      break;
    } else if (answerSix < 8) {
      alert('That\'s too low.');
    } else if (answerSix > 8) {
      alert('That\'s too high.');
    } else if (i === 3) {
      alert('Sorry, you\'ve used all your guesses. The correct answer was 8.');
    }
  }
}

function q7(){
  let foods = ['pizza', 'burritos', 'sushi'];
  for (let i = 0; i < 6; i++) {
    let answerSeven = prompt('What are some of my favorite things to eat?').toLowerCase();
    //console.log(`answerSeven = ${answerSeven}`);
    for (let j = 0; j < foods.length; j++) {
      if (answerSeven === foods[j]) {
        alert(`Yes, I do like ${answerSeven}.`);
        score++;
        i = 6;
        break;
      }
    }
  }
  alert(`These are all correct answers: ${foods}.`);
}

guessingGame();




