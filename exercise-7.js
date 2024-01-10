import { connect, getCollection, close } from "./db.js";

async function deleteJackCustomers() {
  const collection = getCollection("pizzaOrders");
  const filter = { customer_name: "Jack" };
  const result = await collection.deleteMany(filter);
  console.log("Deleted", result.deletedCount, "documents");
  return "done.";
}
async function findJackCustomers() {
  const collection = getCollection("pizzaOrders");
  const filter = { customer_name: "Jack" };
  const result = await collection.find(filter).toArray();
  console.log("Found", result.length, "documents");
  return "done.";
}

async function main() {
  await connect();
  try {
    await deleteJackCustomers();
    await findJackCustomers();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}

main();
