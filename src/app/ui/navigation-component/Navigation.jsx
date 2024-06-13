import './Navigation.css';

import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-custom">
                <a class="navbar-brand" href="#">
                    <img src="your-logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-top" />
                    Your Company
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">|||</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</ Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</ Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/services">Services</ Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</ Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/cart">Cart</ Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signin">Sign Up / Sign In</ Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;