import { connect, getCollection, close } from "./db.js";
async function sortTotalPrice() {
  const collection = getCollection("pizzaOrders");
  const sortTotalPriceMaxToMin = await collection
    .find()
    .sort({ total_price: -1 })
    .toArray();
  console.log(sortTotalPriceMaxToMin);
  return "done.";
}
async function sortCreatedAt() {
  const collection = getCollection("pizzaOrders");
  const sortCreatedAtMinToMax = await collection
    .find()
    .sort({ created_at: 1 })
    .toArray();
  console.log(sortCreatedAtMinToMax);
  return "done.";
}
async function main() {
  await connect();
  try {
    await sortTotalPrice();
    await sortCreatedAt();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
