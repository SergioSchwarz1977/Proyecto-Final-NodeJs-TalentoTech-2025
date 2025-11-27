import express from 'express';
import { getProducts, getProductById, addProducts, deleteProducts, updateProducts } from "../controllers/products.controllers.js";

const route = express.Router();

route.get("/products", getProducts);

route.get("/products/:id", getProductById);

route.post("/products/create", addProducts);

route.delete("/products/:id", deleteProducts);

route.put("/products/update/:id", updateProducts);

export default route;
