db.pizzaOrders.find({"quantity":{$lt:5},$and:[{"credit_card_type":"mastercard"}]})
db.pizzaOrders.find({
    "size": "small",
    $and: [
    { "quantity": { $gte: 1, $lte: 5 } }
    ]
    })
db.pizzaOrders.find({"quantity": {$gt:10},$nor:[{"credit_card_type":"mastercard"}]},{"quantity":1,"credit_card_type":1})