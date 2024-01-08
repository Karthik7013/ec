import express from "express";
import {
  getAllProducts,
  getCategory,
  getProductByCategory,
  getProductById,
} from "./controllers/product.js";

const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send({ message: "This is a RESTFULL API" });
});

app.get("/products/all", getAllProducts);
app.get("/products/category", getCategory);
app.get("/products/category/:category", getProductByCategory);
app.get("/products/:id", getProductById);

// find a user
app.post("/login", (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let findUser = users.findIndex((e) => e.name === name);
  if (!findUser) {
    if (users[findUser].password === password) {
      res.send(users[findUser]);
    } else {
      res.send({ message: "incorrect password" });
    }
  } else {
    res.send({ message: "user not found !" });
  }
});

// add a user
app.post("/register", (req, res) => {
  let { name, password, email, phno } = req.body;
  let newUser = {
    name: name,
    password: password,
    email: email,
    phno: phno,
    cart: [{}],
  };
  users.push(newUser);
  res.send({ message: "user added", users });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
