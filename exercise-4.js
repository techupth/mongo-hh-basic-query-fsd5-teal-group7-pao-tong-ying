import { connect, getCollection, close } from "./db.js";
async function findPizzaOrders() {
  const collection = getCollection("pizzaOrders");
  const findPizzaOrders4 = await collection
    .find({
      quantity: { $lt: 5 },
      credit_card_type: "mastercard",
    })
    .toArray();
  console.log(findPizzaOrders4);
  return "done.";
}

async function findPizza10Orders() {
  const collection = getCollection("pizzaOrders");
  const findPizza10OrdersNull = await collection
    .find({
      quantity: { $gte: 10 },
      credit_card_type: null,
    })
    .toArray();
  console.log(findPizza10OrdersNull);
  return "done.";
}

async function findSmallPizzaOrders() {
  const collection = getCollection("pizzaOrders");
  const findSmallPizzaOrdersOneToFive = await collection
    .find({
      $and: [{ quantity: { $gte: 1, $lte: 5 } }, { size: "small" }],
    })
    .toArray();
  console.log(findSmallPizzaOrdersOneToFive);
  return "done.";
}

async function main() {
  await connect();
  try {
    await findPizzaOrders();
    await findSmallPizzaOrders();
    await findPizza10Orders();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
