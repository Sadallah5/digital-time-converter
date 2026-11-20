const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDirectDistance(x, y, z) {
    const total = x * x + y * y + z * z;
    const distance = Math.sqrt(total);
    console.log("\n===== DRONE FLIGHT DATA =====");
    console.log("Forward distance (x): " + x);
    console.log("Sideways distance (y): " + y);
    console.log("Altitude (z): " + z);
    console.log("Direct return distance: " + distance + " metres");
}

rl.question("Enter forward distance (x): ", function(inputX) {
    const x = Number(inputX);
    rl.question("Enter sideways distance (y): ", function(inputY) {
        const y = Number(inputY);
        rl.question("Enter altitude (z): ", function(inputZ) {
            const z = Number(inputZ);
            calculateDirectDistance(x, y, z);
            rl.close();
        });
    });
});
