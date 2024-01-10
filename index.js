import express from "express";
import {
  getAllProducts,
  getCategory,
  getProductByCategory,
  getProductById,
} from "./controllers/product.js";

import {
  userLogin,
  addUser,
  addToCart
} from "./controllers/user.js"

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send({ message: "This is a RESTFULL API" });
});

// product routes
app.get("/products/all", getAllProducts);
app.get("/products/category", getCategory);
app.get("/products/category/:category", getProductByCategory);
app.get("/products/:id", getProductById);

// user routes
app.post("/user/login", userLogin);
app.post("/user/register", addUser);

app.post('/user/cart/:id', addToCart);

app.get('*', (req, res) => {
  res.send({
    error: 'Page Not Found !'
  })
})

app.listen(5000, () => {
  console.log("server running on port 5000");
});
