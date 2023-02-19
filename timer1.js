const timeArr = process.argv.slice(2);

const timer = (input) => {
  if (input <= 0) {
    console.log('No time stated to set timer');
  };
  for (const time of input) {
    let timeAsNumber = Number(time);
    if (!timeAsNumber) {
      console.log(`${time} is not a number`);
    } else if (timeAsNumber <= 0) {
      console.log(`Cannot set timer for ${time}, as it is a negative number`);
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timeAsNumber * 1000);
    }
  }

};



timer(timeArr);