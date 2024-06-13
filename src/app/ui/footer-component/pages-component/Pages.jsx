import React from 'react';

const Pages = (props) => {
    const { Items } = props;
    return (
        <>
            {
                Items.map((page, index) => {
                    return (
                        <>
                            <a className="btn-link" key={index} href={page.path}>{page.name}</a>
                        </>
                    )
                })

            }
        </>
    );
}

export default Pages;