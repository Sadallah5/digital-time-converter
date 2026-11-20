const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ingredients = ["flour (g)", "sugar (g)", "eggs"];
let amounts = [500, 100, 3];
function scaleRecipe(batches) {
    amounts[0] = amounts[0] * batches;
    amounts[1] = amounts[1] * batches;
    amounts[2] = amounts[2] * batches;
    console.log("\n===== SCALED CUPCAKE RECIPE =====");
    console.log("Number of batches: " + batches);
console.log(ingredients[0] + ": " + amounts[0]);
console.log(ingredients[1] + ": " + amounts[1]);
console.log(ingredients[2] + ": " + amounts[2]);
}
rl.question("How many batches do you want to take? ", function(input) {
let batches = Number(input);
scaleRecipe(batches);
rl.close();
});