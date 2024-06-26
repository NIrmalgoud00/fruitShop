
const Products = (props) => {
    const { products, type } = props;

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                            <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                    <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                </div>
                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", left: "10px" }}>{type}</div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <h4 className="text-truncate" style={{ height: "29px" }}>{product.title}</h4>
                                    <p className="overflow-hidden" style={{ height: "96px" }}>
                                        {
                                            product.description
                                        }
                                    </p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">
                                            ₹{product.price}/ kg</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Products;