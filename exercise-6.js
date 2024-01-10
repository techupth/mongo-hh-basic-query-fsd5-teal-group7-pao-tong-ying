import { connect, getCollection, close } from "./db.js";

async function updateJackCustomers() {
  const collection = getCollection("pizzaOrders");
  const filter = { customer_name: "Jack" };
  const update = { $set: { isAdmin: false } };
  const upsertTrue = { upsert: true };
  const result = await collection.updateMany(filter, update, upsertTrue);
  console.log("Updated", result.modifiedCount, "documents");
  return "done.";
}
async function updateAllDocuments() {
  const collection = getCollection("pizzaOrders");
  const filter = {};
  const update = { $set: { country: "Thailand" } };
  const result = await collection.updateMany(filter, update);
  console.log("Updated", result.modifiedCount, "documents");
  return "done.";
}

async function updateOrInsertDocument() {
  const collection = getCollection("pizzaOrders");
  const filter = { customer_name: "M" };
  const update = {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  };
  const upsertTrue = { upsert: true };
  const result = await collection.updateOne(filter, update, upsertTrue);
  if (result.upsertedCount > 0) {
    console.log("Inserted a new document");
  } else {
    console.log("Updated an existing document");
  }
  return "done.";
}

async function main() {
  await connect();
  try {
    await updateJackCustomers();
    await updateAllDocuments();
    await updateOrInsertDocument()
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}

main();
