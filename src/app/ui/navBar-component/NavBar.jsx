"use client"

import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-primary" onClick={(open) => { setOpen(!open) }}></span>
            </button>
            {open ? <h1>hello world</h1> : null}
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="shop.html" className="nav-item nav-link">Shop</a>
                    <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0 bg-secondary rounded-0">
                            <a href="cart.html" className="dropdown-item">Cart</a>
                            <a href="chackout.html" className="dropdown-item">Chackout</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="d-flex m-3 me-0">
                    <a href="#" className="position-relative me-4 my-auto">
                        <i className="fa fa-shopping-bag fa-2x"></i>
                        <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>3</span>
                    </a>
                    <a href="#" className="my-auto">
                        <i className="fas fa-user fa-2x"></i>
                        <p>Name 123456</p>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;