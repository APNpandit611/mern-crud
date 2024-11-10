import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    "https://mern-crud-jprx.onrender.com/product/get/all"
                );
                setProducts(res.data.product);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <div className="m-5">
            <div className="flex justify-between items-center">
                <h1 className="text-xl">Product lists</h1>
                <Link to="/product/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 rounded-md">
                                No
                            </th>
                            <th className="border border-slate-600 rounded-md">
                                Name
                            </th>
                            <th className="border border-slate-600 rounded-md">
                                Price
                            </th>
                            <th className="border border-slate-600 rounded-md">
                                Description
                            </th>
                            <th className="border border-slate-600 rounded-md">
                                Quantity
                            </th>
                            <th className="border border-slate-600 rounded-md">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {product.name}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {product.price}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {product.description}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {product.quantity}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    <div className="flex justify-center gap-x-4">
                                        <Link to={`/product/details/${product._id}`}>
                                            <BsInfoCircle className="text-2xl text-green-700" />
                                        </Link>
                                        <Link to={`/product/update/${product._id}`}>
                                            <AiOutlineEdit className="text-2xl text-yellow-700" />
                                        </Link>
                                        <Link to={`/product/delete/${product._id}`}>
                                            <MdOutlineDelete className="text-2xl text-red-700" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
