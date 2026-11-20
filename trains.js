const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let passengers = ["Kalisa", "Claude", "Jean"];
let destinations = ["kigali", "Muhanga", "Huye"];

function updateTrain(newName, newDestination) {
  let departedPassenger = passengers.shift();
  destinations.shift();
  passengers.push(newName);
  destinations.push(newDestination);

  console.log("\n===== TRAIN STATION =====");
  console.log("GOODBYE, " + departedPassenger + "!");
  console.log("\nupdated passengersList: ");

  for (let i = 0; i < passengers.length; i++) {
    console.log((i + 1) + ". " + passengers[i] + " - Destination: " + destinations[i]);
  }
}

rl.question("Enter new passenger's name: ", function(newName) {
  rl.question("Enter new passenger's destination: ", function(newDestination) {
    updateTrain(newName, newDestination);
    rl.close();
  });
});