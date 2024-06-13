import React, { useState } from 'react';
import { useFormik } from 'formik';

function ShopSideBar(props) {
    
    const [rangeValue, setRangeValue] = useState(0);

    const formik = useFormik({
        initialValues: {
          rangeInput: 0,
          Categories: ''
        },
        onSubmit: values => {
          console.log(values);
        }
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="col-lg-3">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <h4 className="mb-2">Price</h4>
                            <input
                                type="range"
                                className="form-range w-100"
                                id="rangeInput"
                                name="rangeInput"
                                min="0"
                                max="200"
                                value={rangeValue}
                                onChange={(event) => {
                                    setRangeValue(event.target.value);
                                    formik.setFieldValue('rangeInput', event.target.value);
                                }}
                            />
                            <output id="amount" name="amount" min-value="0" max-value="200" htmlFor="rangeInput">
                                {rangeValue}
                            </output>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <h4>Additional</h4>
                            {['Organic', 'Fresh', 'Sales', 'Discount', 'Expired'].map((category, index) => (
                                <div className="mb-2" key={index}>
                                    <input
                                        type="radio"
                                        className="me-2"
                                        id={`Categories-${index + 1}`}
                                        name="Categories"
                                        value={category}
                                        onChange={formik.handleChange}
                                    />
                                    <label htmlFor={`Categories-${index + 1}`}> {category}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ShopSideBar;