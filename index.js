import express from "express";
import mongoose from "mongoose";
import { productRouter } from "./routes/productRoutes.js"
import { userRouter } from "./routes/userRoutes.js";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://admin:1234@cluster0.gbzago5.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log('db connected')
}).catch((err) => {
  console.log(err);
})

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send({ message: "This is a RESTFULL API" });
});


app.use('/products', productRouter);
app.use('/user', userRouter);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
