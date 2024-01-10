db.pizzaOrders.find({customer_name: "Cherlyn"})
db.pizzaOrders.find({credit_card_type: "mastercard"})
db.pizzaOrders.find({size: "medium"}).limit(5)