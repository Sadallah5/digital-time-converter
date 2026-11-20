const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertWorkoutTime(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  console.log(`Total work time: ${totalMinutes} minutes`);
  console.log(`${hours} hours and ${minutes} minutes`);
}

rl.question("Enter total workout time in minutes: ", function (answer) {
  let theTotalMinutes = Number.parseInt(answer, 10);
  convertWorkoutTime(theTotalMinutes);
  rl.close();
}); 