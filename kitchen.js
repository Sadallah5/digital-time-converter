let orders = ["Burger", "Pizza", "Pasta", "Salad"];
let tables = [4, 2, 7, 1];

function processKitchen(newOrder, newTable, canceledOrder) {
  let servedOrder = orders.shift();
  tables.shift();

  orders.push(newOrder);
  tables.push(newTable);

  let position = orders.indexOf(canceledOrder);
  if (position !== -1) {
    orders.splice(position, 1);
    tables.splice(position, 1);
  }

  console.log("Served order: " + servedOrder);
  console.log("Remaining orders: " + orders.join(" , "));
}

processKitchen("chichen", 5, "Pasta");


