let products = [
    { name: "Laptop", price: 12000, quantity: 5 },
    { name: "Mouse", price: 250, quantity: 10 },
    { name: "Keyboard", price: 600, quantity: 7 },
    { name: "Monitor", price: 2500, quantity: 3 },
    { name: "USB Cable", price: 100, quantity: 20 }
];

//Calculate total inventory value
//Write calculateInventoryValue(products). Multiply each product's price by its quantity and return the sum of all products' stock values.
//Expected result: 104000

// function calculateInventoryValue(products) {
//   let total = 0;
//   let productTotalValue = 0;
//   for (let i = 0; i < products.length; i++){
//      productTotalValue = products[i].price * products[i].quantity
//      console.log(`The Product ${products[i].name} has the total value of ${productTotalValue}`)
//      total += productTotalValue;
//      console.log(`the current total is ${total} after adding the total value for ${products[i].name} which is ${productTotalValue}`)
//   }
  // console.log(12000*5+(250*10)+(600*7)+(2500*3)+(100*20))
// return total;
// };

//console.log(calculateInventoryValue(products));
// 12000x5+(250x10)+(600x7)+(2500x3)+(100x20)

//Search for a product
//Write findProduct(products, name). Return the matching object, or null if it does not exist.

// function findProduct(products, name) {
//   return products.find(product => product.name === name) || null;
// };
// console.log(findProduct(products, "Mouse"))
//Filter products by price
//Write getProductsAbovePrice(products, limit). Return a new array containing only products whose price exceeds limit. Preserve each complete product object.

// function getProductsAbovePrice(products, limit) {

//   let priceExceedsLimit = [];

//   for (let i = 0; i < products.length; i++) {
//     let exceededPrice = products[i];

//     if (exceededPrice.price > limit) {
//       priceExceedsLimit.push(exceededPrice);
//     }
//   }
//   return priceExceedsLimit;
// };

// console.log(getProductsAbovePrice(products,500 ));
//Find low-stock products
//Write getLowStockProducts(products, limit).Return products whose quantity is less than limit.
function getLowStockProducts(products, limit) {
    let lessQuantity = [];
  for (let i = 0; i < products.length; i++){
    let originalproduct = products[i];
      if (originalproduct.quantity < limit) {
        lessQuantity.push(originalproduct);

      }
  }
  return lessQuantity;
};
console.log(getLowStockProducts(products, 8))

//Apply a discount
//Write applyDiscount(products, discount). Return a new array of objects containing each product's name and discounted price. A discount of 0.20 means 20%. Do not modify the original products.
