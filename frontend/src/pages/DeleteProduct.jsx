import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const DeleteProduct = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`https://mern-crud-jprx.onrender.com/product/get/${id}`)
                setProduct(res.data.product)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    },[id])

    const handleDelete = async () => {
        setLoading(true);
        try {
            console.log(id)
            await axios.delete(
                `https://mern-crud-jprx.onrender.com/product/delete/${id}`
            );
            navigate("/")
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <div className="m-5">
            <BackButton />
            <h1 className="text-3xl my-5">Delete Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[40%] p-8 mx-auto">
                    <h3 className="text-2xl">
                        {" "}
                        Are you sure you want to delete {product.name}? 

                    </h3>
                    <button
                        onClick={handleDelete}
                        className="p-4 w-full bg-red-600 m-8"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default DeleteProduct;
