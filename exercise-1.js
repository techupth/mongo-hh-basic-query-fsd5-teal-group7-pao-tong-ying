import { connect, getCollection, close } from "./db.js";

async function fineCherlyn() {
  const collection = getCollection("pizzaOrders");
  const findOneCherlyn = await collection.findOne({ customer_name: "Cherlyn" });
  console.log("Documents for Cherlyn is:", findOneCherlyn);
  return "done.";
}

async function findMasterCard() {
  const collection = getCollection("pizzaOrders");
  const findCreditCardMasterCard = await collection
    .find({ credit_card_type: "mastercard" })
    .toArray();
  console.log(findCreditCardMasterCard);
  return "done.";
}

async function pizzaMedium() {
  const collection = getCollection("pizzaOrders");
  const findPizzaMedium = await collection
    .find({ size: "medium" })
    .limit(5)
    .toArray();
  console.log(findPizzaMedium);
  return "done.";
}
async function main() {
  await connect();
  try {
    await fineCherlyn();
    await findMasterCard();
    await pizzaMedium();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
