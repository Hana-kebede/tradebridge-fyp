const Order = require("../models/Order")

let orders = []

exports.createOrder = (req,res)=>{

const {product,quantity,retailer} = req.body

const newOrder = new Order(
orders.length + 1,
product,
quantity,
retailer
)

orders.push(newOrder)

res.json({
message:"Order created successfully",
order:newOrder
})

}

exports.getOrders = (req,res)=>{

res.json(orders)

}