import SearchBar from '../seachBar-component/SearchBar';
import OurPages from '../ourPages-component/OurPages'
import Pages from './pages-component/Pages'

const Footer = () => {
    const Pages1 = [
        {
            name: "About Us",
            path: "#"
        },
        {
            name: "Contact Us",
            path: "#"
        },
        {
            name: "Privacy Policy",
            path: "#"
        },
        {
            name: "Terms & Condition",
            path: "#"
        },
        {
            name: "Return Policy",
            path: "#"
        },
        {
            name: "FAQs & Help",
            path: "#"
        },
    ]

    const Pages2 = [
        {
            name: "My Account",
            path: "#"
        },
        {
            name: "Shop details",
            path: "#"
        },
        {
            name: "Shopping Cart",
            path: "#"
        },
        {
            name: "Wishlist",
            path: "#"
        },
        {
            name: "Order History",
            path: "#"
        },
        {
            name: "International Orders",
            path: "#"
        },
    ]

    return (
        <>
            <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
                <div className="row g-4">
                    <div className="col-lg-2">
                        <a href="#">
                            <h1 className="text-primary mb-0">Fruitables</h1>
                            <p className="text-secondary mb-0">Fresh products</p>
                        </a>
                    </div>
                    <div className="col-lg-7">
                        <SearchBar
                            placeholder="Enter Email"
                            BtnName="Subscribe Now"
                            width="w-100"
                            right="0%"
                        />
                    </div>
                    <div className="col-lg-3">
                        <OurPages />
                    </div>
                </div>
            </div>

            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Why People Like us!</h4>
                        <p className="mb-4">typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                        <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column text-start footer-item">
                        <h4 className="text-light mb-3">Shop Info</h4>
                        <Pages Items={Pages1} />
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column text-start footer-item">
                        <h4 className="text-light mb-3">Account</h4>
                        <Pages Items={Pages2} />
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Contact</h4>
                        <p>Address: 1429 Netus Rd, NY 48247</p>
                        <p>Email: Example@gmail.com</p>
                        <p>Phone: +0123 4567 8910</p>
                        <p>Payment Accepted</p>
                        <img src="img/payment.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;