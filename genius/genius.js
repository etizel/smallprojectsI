

function genius() {
  var numberRandom = [Math.floor(Math.random(99) * (1 - 99 + 1)) + 1];
  let user = prompt('Type one number');
  if(Number(numberRandom) === Number(user.length)) {
    console.log("YOU'RE RIGHT");
  } else {
    return console.log('Wrong Number');

  }
  }
  genius()