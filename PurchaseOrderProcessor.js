/*
Here is our warehouse's inventory, a sample purchaseOrder, and a sample invoice. The inventory in the warehouse stock needs to be taken out and set aside for the appropriate order so it can be packed and shipped.

Please create a function that our warehouse can use to help them fill their purchase orders appropriately and which returns a corresponding invoice. For items for which there is not enough inventory, please include a message in the fulfillment status for that item on the invoice: "backordered". When there is enough stock, the fulfillment status should be "fulfilled".

A warehouse inventory would look like this:

let warehouseInventory = {
  warehouseID: 103,
  warehouseManager: "Ashvin",
  items: [
    {
      itemName: "string cheese",
      sku: 382910,
      department: "dairy",
      quantity: 100,
      priceInDollars: 1.0,
    },
    {
      itemName: "bananas",
      sku: 738291,
      department: "produce",
      quantity: 300,
      priceInDollars: 0.3,
    },
    {
      itemName: "coffee beans",
      sku: 382930,
      department: "coffee/tea",
      quantity: 250,
      priceInDollars: 6.5,
    },
    {
      itemName: "green beans",
      sku: 4839201,
      department: "produce",
      quantity: 5,
      priceInDollars: 0.2,
    },
  ],
};
A purchase order will look something like this:

let purchaseOrder = {
  purchaserId: "2",
  orderId: "2B",
  items: [
    {
      itemName: "green beans",
      sku: 4839201,
      department: "produce",
      quantity: 500,
      priceInDollars: 0.2,
    },
    {
      itemName: "coffee beans",
      sku: 382930,
      department: "coffee/tea",
      quantity: 25,
      priceInDollars: 6.5,
    },
    {
      itemName: "string cheese",
      sku: 382910,
      department: "dairy",
      quantity: 105,
      priceInDollars: 1.0,
    },
  ],
};
An invoice will look something like this:

let invoice = {
  purchaserId: "2",
  orderId: "2B",
  items: [
    {
      itemName: "green beans",
      sku: 4839201,
      department: "produce",
      quantity: 500,
      priceInDollars: 0.2,
      fulfillmentStatus: "backordered"
    },
    {
      itemName: "coffee beans",
      sku: 382930,
      department: "coffee/tea",
      quantity: 25,
      priceInDollars: 6.5,
      fulfillmentStatus: "fulfilled",
    },
    {
      itemName: "string cheese",
      sku: 382910,
      department: "dairy",
      quantity: 105,
      priceInDollars: 1.0,
      fulfillmentStatus: "backordered"
    },
  ],
};
*/

function purchaseOrderProcessor(inventory, purchaseOrder) {
    var invoice = {
        purchaserId: purchaseOrder.purchaserId,
        orderId: purchaseOrder.orderId,
        items: purchaseOrder.items
    }
    
    //find item in inventory

    for(var i=0;i<purchaseOrder.items.length;i++){
        var index = 0
        for(var j=0;j<inventory.items.length;j++)
            if(purchaseOrder.items[i].itemName == inventory.items.itemName)
                index=j
        if(purchaseOrder.items[i].quantity>inventory.items[index].quantity)
            invoice.items[i].fulfillmentStatus="backordered"
        else
            invoice.items[i].fulfillmentStatus="fulfilled"
    }
    return invoice
}
