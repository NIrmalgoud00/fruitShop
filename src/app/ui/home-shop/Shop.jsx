'use client'

import React from 'react';
import { useState, useEffect } from 'react';

import Products from "../products/Products";

function Shop() {
    const [productType, setProductType] = useState("Fruits");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/${productType}`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [productType])


    return (
        <>
            <div className="row g-4">
                <div className="col-lg-4 text-start">
                    <h1>Our Organic Products</h1>
                </div>
                <div className="col-lg-8 text-end">
                    <ul className="nav nav-pills d-inline-flex text-center mb-5">
                        <li className="nav-item">
                            <button type="button" className="btn btn-light rounded-pill  py-2 m-2" style={{ width: "130px" }} onClick={() => setProductType("Fruits")} >Fruits</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-light rounded-pill  py-2 m-2" style={{ width: "130px" }} onClick={() => setProductType("Vegetables")} >Vegetables</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-light rounded-pill  py-2 m-2" style={{ width: "130px" }} onClick={() => setProductType("Bread")} >Bread</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-light rounded-pill  py-2 m-2" style={{ width: "130px" }} onClick={() => setProductType("Meat")} >Meat</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-0">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <Products products={products} type={productType} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;