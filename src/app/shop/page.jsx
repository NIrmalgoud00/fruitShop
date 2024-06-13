"use client"
import { useState, useEffect } from 'react';

import NavBar from "../ui/navBar-component/NavBar"
import Header from "../ui/Header-component/Header"
import ShopSideBar from "../ui/shop-sideBar-component/ShopSideBar"


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
            <div className="container-fluid fixed-top" style={{ border: "2px solid black" }}>
                <div className="container px-0">
                    <NavBar />
                </div>
            </div>
            <div className="container-fluid page-header py-5">
                <Header />
            </div>

            <div class="container-fluid fruite py-3">
                <div class="container py-3">
                    <h1 class="mb-4">Fresh fruits shop</h1>
                    <div class="row g-4">
                        <div class="col-lg-12">
                            <div class="row g-4">
                                <div className="mb-3">
                                    <h4>Categories</h4>
                                    <div class="col-lg-3">
                                        <ul class="list-unstyled fruite-categorie">
                                            <li class="list-unstyled">
                                                <button type="button" className="btn btn-light w-100 py-2 mb-2" onClick={() => setProductType("Fruits")} >Fruits</button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn btn-light w-100 py-2 mb-2" onClick={() => setProductType("Vegetables")} >Vegetables</button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn btn-light w-100 py-2 mb-2" onClick={() => setProductType("Bread")} >Bread</button>
                                            </li>
                                            <li>
                                                <button type="button" className="btn btn-light w-100 py-2 mb-2" onClick={() => setProductType("Meat")} >Meat</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <ShopSideBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;