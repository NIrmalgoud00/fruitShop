import React from 'react';

function SearchBar(props) {
    return (<>
        <div className="position-relative mx-auto">
            <input className={`form-control border-1 border-secondary py-3 px-4 rounded-pill ${props.width}`} type="text" placeholder={props.placeholder} />
            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 top-0" style={{right: `${props.right}`}} >{props.BtnName}</button>
        </div>
    </>
    );
}

export default SearchBar;