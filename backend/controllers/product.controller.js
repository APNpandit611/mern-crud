import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, price, description, quantity } = req.body;
        if (!name || !price || !description || !quantity) {
            return res.status(400).json({
                message: "Please fill in all fields.",
                success: false,
            });
        }

        const product = await Product.create({
            name,
            price,
            description,
            quantity,
        });

        return res.status(201).json({
            message: "Product created successfully.",
            product,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.find({});
        if (!product) {
            return res.status(400).json({
                message: "Product not found.",
                success: false,
            });
        }
        return res.status(200).json({
            message: "All Products retrieved successfully.",
            product,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProductById = async (req, res) => {
    try {
        // const productId = req.params.id;
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({
                message: "Product not found.",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Product retrieved successfully.",
            product,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, price, description, quantity } = req.body;

        let product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            });
        }

        // if(name) product.name = name
        // if(price) product.price = price
        // if(description) product.description = description
        // if(quantity) product.quantity = quantity

        // await product.save()

        // product = {
        //     name:product.name,
        //     price:product.price,
        //     description:product.description,
        //     quantity:product.quantity
        // }

        const editProduct = { name, price, description, quantity }
        const updatedProduct = await Product.findByIdAndUpdate(productId, editProduct, {new:true})

        return res.status(200).json({
            message: "Product updated successfully",
            product:updatedProduct,
            success: true
        })

    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const {id } = req.params;
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Product deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}