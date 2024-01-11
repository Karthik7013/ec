import express from "express";
import { productRouter } from "./routes/productRoutes.js"
import { userRouter } from "./routes/userRoutes.js"


const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send({ message: "This is a RESTFULL API" });
});


app.use('/products', productRouter);
app.use('/user', userRouter);


app.get('*', (req, res) => {
  res.send({
    error: 'Page Not Found !'
  })
})

app.listen(5000, () => {
  console.log("server running on port 5000");
});
