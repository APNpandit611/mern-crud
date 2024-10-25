import express from "express";
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct)
router.get("/get/all", getProduct)
router.get("/get/:id", getProductById)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)


export default router;