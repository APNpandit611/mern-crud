import express from "express"
import cors from "cors"
import { connectDB } from "./utils/db.js"
import productRoute from "./routes/product.route.js"

const app = express()
const port = 3005

const corOption = {
    origin: ["https://mern-crud-frontend-edil.onrender.com"],
    credentials: true
}
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/product', productRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connectDB();
})