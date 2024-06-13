import React from 'react';

const discounts = [
    {
        imgSrc: "img/featur-1.jpg",
        divsBgColor: {
            div1BgColor: "bg-danger",
            div2BgColor: "bg-success",
        },
        heading1: {
            text: "Fresh Apples",
            color:"text-white"
        },
        heading2: "20% OFF",
    },
    {
        imgSrc: "img/featur-2.jpg",
        divsBgColor: {
            div1BgColor: "bg-secondary",
            div2BgColor: "bg-white",
        },
        heading1: {
            text: "Tasty Fruits",
            color:"text-success"
        },
        heading2: "Free delivery",
    },
    {
        imgSrc: "img/featur-3.jpg",
        bgColor: "bg-secondary",
        divsBgColor: {
            div1BgColor: "bg-success",
            div2BgColor: "bg-danger",
        },
        heading1: {
            text: "Exotic Vegitable",
            color:"text-white"
        },
        heading2: "Discount 30@",
    }
]

function Discount() {

    return (
        <div className="row g-4 justify-content-center">
            {
                discounts.map((discount) => {
                    return (
                        <div key={discount.heading1} className="col-md-6 col-lg-4">
                            <a href="#" className='bg-warning text-decoration-none'>
                                <div className="service-item bg-secondary rounded border border-secondary">
                                    <img src={discount.imgSrc} className="img-fluid rounded-top w-100" alt="" />
                                    <div className={`px-4 rounded-bottom ${discount.divsBgColor.div1BgColor}`}>
                                        <div className={`service-content text-center p-4 rounded ${discount.divsBgColor.div2BgColor}`}>
                                            <h5 className={discount.heading1.color}>{discount.heading1.text}</h5>
                                            <h3 className="mb-0 text-black">{discount.heading2}</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default Discount;