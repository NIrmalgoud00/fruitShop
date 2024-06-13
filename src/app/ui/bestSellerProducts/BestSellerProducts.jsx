import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BestsellerProducts = () => {
  const fruitProducts = [
    {
      imgSrc: "img/best-product-1.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/best-product-2.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/best-product-3.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/best-product-4.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/best-product-5.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/best-product-6.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
  ]

  const vegatablesProducts = [
    {
      imgSrc: "img/fruite-item-1.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/fruite-item-2.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/fruite-item-3.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
    {
      imgSrc: "img/fruite-item-4.jpg",
      name: "Organic Tomato",
      price: "3.12 $",
      rating: 4
    },
  ];

  return (
    <div className="row g-4">
      {fruitProducts.map((product, index) => (
        <div className="col-lg-6 col-xl-4" key={index}>
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src={product.imgSrc} className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <a href="#" className="h5">{product.name}</a>
                <div className="d-flex my-3">
                  {[...Array(5)].map((star, i) => (
                    <i key={i} className={`fas fa-star${i < product.rating ? " text-primary" : ""}`}></i>
                  ))}
                </div>
                <h4 className="mb-3">{product.price}</h4>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {vegatablesProducts.map((product, index) => (
        <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
          <div className="text-center">
            <img src={product.imgSrc} className="img-fluid rounded" alt="" />
            <div className="py-4">
              <a href="#" className="h5">{product.name}</a>
              <div className="d-flex my-3 justify-content-center">
                {[...Array(5)].map((star, i) => (
                  <i key={i} className={`fas fa-star${i < product.rating ? " text-primary" : ""}`}></i>
                ))}
              </div>
              <h4 className="mb-3">{product.price}</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestsellerProducts;
