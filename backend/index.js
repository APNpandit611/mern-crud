import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({});

const app = express();
const port = process.env.PORT || 3000;

const _dirname = path.resolve();

const corOption = {
    origin: ["http://localhost:5174"],
    credentials: true,
};
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", productRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});
