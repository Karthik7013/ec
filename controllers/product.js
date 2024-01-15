import mongoose from "mongoose";
import { Product } from "../modal/ProductModal.js"





const getAllProducts = async (req, res) => {
  try {
    let allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error)
  }
}

const getCategory = async (req, res) => {
  let category = [];
  let products = await Product.find({});
  products.map((e) => {
    if (!category.includes(e.category)) {
      category.push(e.category)
    }
  })
  res.send(category)
}

const getProductByCategory = async (req, res) => {

  try {
    let category = req.params.category;
    let products = await Product.find({ category: category });
    res.status(200).json(products)
  } catch (error) {
    res.statu(500).json(error)
  }
}

const getProductById = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findById(id)
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error)
  }
}

export { getAllProducts, getCategory, getProductByCategory, getProductById }