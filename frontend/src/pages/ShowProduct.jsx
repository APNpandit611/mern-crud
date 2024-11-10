import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const productDetails = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://mern-crud-jprx.onrender.com/product/get/${id}`
                );
                setProducts(res.data.product);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        productDetails();
    }, [id]);

    return (
        <div className="m-5">
            <BackButton />

            <div className="flex flex-col gap-y-3 m-10 p-5 border border-slate-600 rounded-md w-[40%]">
                <h1 className="text-xl underline">Product Details:</h1>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="flex flex-col gap-y-5">
                        <div className="">
                            <span className="text-lg mr-4">Id:</span>
                            <span>{products._id}</span>
                        </div>
                        <div >
                            <span className="text-lg mr-4">Name:</span>
                            <span>{products.name}</span>
                        </div>
                        <div>
                            <span className="text-lg mr-4">Price:</span>
                            <span>{products.price}</span>
                        </div>
                        <div >
                            <span className="text-lg mr-4">Quantity:</span>
                            <span>{products.quantity}</span>
                        </div>
                        <div >
                        <span className="text-lg mr-4">Description:</span>
                        <span>{products.description}</span>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowProduct;
