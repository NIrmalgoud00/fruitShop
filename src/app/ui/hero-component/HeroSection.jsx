import SearchBar from '../seachBar-component/SearchBar';

const HeroSection = () => {

    return (
        <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
                <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                <SearchBar
                    placeholder="Search"
                    BtnName="Search Now"
                    width="w-75"
                    right="25%"
                />
            </div>
            <div className="col-md-12 col-lg-5">
                <div className="fruite">
                    <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;