import { connect, getCollection, close } from "./db.js";
async function findOneZoe() {
  const collection = getCollection("pizzaOrders");
  const findOneZoeTotal = await collection.findOne(
    { customer_name: "Zoe" },
    { projection: { total_price: true, customer_name: true } }
  );
  console.log(findOneZoeTotal);
  return "done.";
}
async function main() {
  await connect();
  try {
   await findOneZoe();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
