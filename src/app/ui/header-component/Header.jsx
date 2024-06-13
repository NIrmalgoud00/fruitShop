import React from 'react';

function Header() {
    return (
        <>
            <h1 className="text-center text-white display-6">Shop</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Shop</li>
            </ol>
        </>
    );
}

export default Header;