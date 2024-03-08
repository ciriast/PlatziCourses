import { addProduct, products } from "./product.service";

addProduct({
  title: "Hi",
  createdAt: new Date(1970,1,1),
  stock: 12
})

console.log(products);
