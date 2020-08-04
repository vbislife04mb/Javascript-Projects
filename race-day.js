/*Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/

//Create a random race number between 0-999
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;

//Check runners age
let runnerAge = 17;

//Adult runners early registration
if (runnerAge > 18 && earlyRegister === true){
  raceNumber += 1000;
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`)
}
//Adult runners late registration
else if (runnerAge > 18 && earlyRegister === false){
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`)
}
//Youth runners
else if (runnerAge <= 18){
  console.log(`You will race at 12:30pm and your race number is ${raceNumber}`)
}