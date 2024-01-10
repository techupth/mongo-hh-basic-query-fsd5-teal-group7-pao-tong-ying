import { connect, getCollection, close } from "./db.js";
async function insertPizzaOrder() {
  const collection = getCollection("pizzaOrders");
  const pizzaOrder = {
    size: "small",
    total_price: 3000,
    quantity: 8,
    customer_name: "John",
    credit_card_type: null,
    created_at: "2021-02-07T10:48:40Z",
  };
  const result = await collection.insertOne(pizzaOrder);
  console.log("Inserted document with ID:", result.insertedId);
  return "done.";
}
async function insertManyPizzaOrder() {
  const collection = getCollection("pizzaOrders");
  const pizzaOrder = [
    {
      size: "small",
      total_price: 3000,
      quantity: 1,
      customer_name: "James",
      credit_card_type: null,
      created_at: "2021-02-07T10:48:40Z",
    },
    {
      size: "large",
      total_price: 12000,
      quantity: 13,
      customer_name: "K",
      credit_card_type: null,
      created_at: "2022-03-05T10:48:40Z",
    },
    {
      size: "small",
      total_price: 2000,
      quantity: 2,
      customer_name: "Jack",
      credit_card_type: null,
      created_at: "2022-02-14T10:48:40Z",
    },
  ];
  const result = await collection.insertMany(pizzaOrder);
  console.log("Inserted", result.insertedCount, "documents");
  return "done.";
}

async function main() {
  await connect();
  try {
    await insertPizzaOrder();
    await insertManyPizzaOrder()
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
