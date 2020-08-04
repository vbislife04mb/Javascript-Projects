const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 6
      break;
    case 'thursday':
      return 10
      break;
    case 'friday':
      return 5
      break;
    case 'saturday':
      return 4
      break;
    case 'sunday':
      return 12
      break;
    default:
      return "Error"
      break;
  }
};
const getActualSleepHours = () => {
   return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
};
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Nice work! You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Look at you over achiever! You got more than enough sleep!' + (actualSleepHours - idealSleepHpurs) + ' hours too much sleep.');
  } else {
    console.log('You should go bed, you need ' + (idealSleepHours - actualSleepHours) + ' hours more rest.');
  }
};
calculateSleepDebt();