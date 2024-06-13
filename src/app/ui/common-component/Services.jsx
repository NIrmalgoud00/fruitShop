import '../css/Services.css';

const Services = () => {
    return (
        <div className="container">
            <div className="row">
                {/* <!-- First Div --> */}
                <div className="col-md-12">
                    <div className="custom-div d-flex flex-column justify-content-center align-items-center">
                        <p>icons</p>
                        <p>Home</p>
                    </div>
                </div>
                {/* <!-- Second Div --> */}
                <div className="col-md-12">
                    <div class="parent-div">
                        {/* <!-- First Child Div --> */}
                        <div class="child-div">
                            <p>Icons</p>
                            <p>Lorem ipsum dolor .</p>
                        </div>
                        {/* <!-- Second Child Div --> */}
                        <div class="child-div">
                            <p>Icons</p>
                            <p>Sed do eiusmod .</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Third Div --> */}
                <div className="col-md-12">
                    <div className="custom-div d-flex flex-column justify-content-center align-items-center">
                        <p>icons</p>
                        <p>Messages</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services;