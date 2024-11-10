import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const CreateProduct = () => {
    const [input, setInput] = useState({
        name: "",
        price: "",
        description: "",
        quantity: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const eventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                "http://localhost:3005/product/create",
                input,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            if (res.data.message) {
                setLoading(false);
                navigate("/");
                
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="m-5">
                <BackButton />
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="flex justify-center mx-auto max-w-7xl max-h-full">
                        <form
                            onSubmit={submitHandler}
                            className="w-1/2 border border-gray-300 rounded-md px-8 py-6 my-10 "
                        >
                            <h1 className="font-bold text-xl mb-5 underline text-center">
                                SignUp
                            </h1>
                            <div className="my-4 flex flex-col gap-3">
                                <label>Name</label>
                                <input
                                    name="name"
                                    placeholder="Name"
                                    type="name"
                                    value={input.name}
                                    onChange={eventHandler}
                                    className="border border-slate-600 rounded-lg p-2 "
                                />
                            </div>
                            <div className="my-4 flex flex-col gap-3">
                                <label>Price</label>
                                <input
                                    name="price"
                                    placeholder="Price"
                                    type="price"
                                    value={input.price}
                                    onChange={eventHandler}
                                    className="border border-slate-600 rounded-lg p-2 "
                                />
                            </div>
                            <div className="my-4 flex flex-col gap-3">
                                <label>Description</label>
                                <input
                                    name="description"
                                    placeholder="Description"
                                    type="description"
                                    value={input.description}
                                    onChange={eventHandler}
                                    className="border border-slate-600 rounded-lg p-2 "
                                />
                            </div>
                            <div className="my-4 flex flex-col gap-3">
                                <label>Quantity</label>
                                <input
                                    name="quantity"
                                    placeholder="Quantity"
                                    type="quantity"
                                    value={input.quantity}
                                    onChange={eventHandler}
                                    className="border border-slate-600 rounded-lg p-2 "
                                />
                            </div>
                            <div className="my-6">
                                <button
                                    className="bg-[#202020] text-white w-full p-2 rounded"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateProduct;
