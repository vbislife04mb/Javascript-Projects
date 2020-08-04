let userName = '';
if (userName === ''){
  console.log('Hello!');
} else {
  console.log(`Hello ${userName}`);
}
const userQuestion = 'Should I learn Javascript?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//Choose an Answer
switch (randomNumber) {
  case 0:
    eightBall = 'Signs point to yes';
  break;
  case 1:
    eightBall = 'It is certain';
  break;
  case 2:
    eightBall = 'It is decidedly so';
  break;
  case 3:
    eightBall = 'Reply hazy try again';
  break;
  case 4:
    eightBall = 'Cannot predict now';
  break;
  case 5:
    eightBall = 'Do not count on it';
  break;
  case 6:
    eightBall = 'My sources say no';
  break;
  case 7:
    eightBall = 'Outlook not so good';
  break;
  }

  console.log(eightBall);