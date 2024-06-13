import Header from "../ui/header-component/Header"
import NavBar from "../ui/navBar-component/NavBar"
import HeroSection from "../ui/hero-component/HeroSection";
import Shop from "../ui/home-shop/Shop";
import Discount from "../ui/discount/Discount";
import BestsellerProducts from "../ui/bestSellerProducts/BestSellerProducts";
import Features from "../ui/features-component/Features";
import Footer from "../ui/footer-component/Footer";
import CopyRight from "../ui/copyRight-component/CopyRight";

import { Truck, CircleDollarSign, ArrowLeftRightIcon, PhoneCall } from 'lucide-react';

const Home = () => {


    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <Header />
                </div>
                <div class="container px-0">
                    <NavBar />
                </div>
            </div>


            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <HeroSection />
                </div>
            </div>

            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <Truck size={48} strokeWidth={1.25} />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <CircleDollarSign size={48} strokeWidth={1.25} />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <ArrowLeftRightIcon size={48} strokeWidth={1.25} />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <PhoneCall size={48} strokeWidth={1.25} />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <Shop />
                </div>
            </div>

            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <Discount />
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
                        <h1 className="display-4">Bestseller Products</h1>
                        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div>
                    <BestsellerProducts />
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="bg-light p-5 rounded">
                        <Features />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <Footer />
                </div>
            </div>

            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <CopyRight />
                </div>
            </div>
        </>
    );
}

export default Home;