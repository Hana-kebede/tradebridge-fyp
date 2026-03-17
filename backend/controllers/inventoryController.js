const Inventory = require("../models/Inventory")

let inventory = [

new Inventory(1,"Wheat",500),
new Inventory(2,"Rice",300),
new Inventory(3,"Coffee Beans",150)

]

exports.getInventory = (req,res)=>{

res.json(inventory)

}

exports.updateInventory = (req,res)=>{

const {product,quantity} = req.body

const item = inventory.find(i => i.product === product)

if(item){

item.quantity = quantity

res.json({
message:"Inventory updated",
item
})

}else{

res.status(404).json({
message:"Product not found"
})

}

}