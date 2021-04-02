import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import SearchProduct from './SearchProduct';

import loader from '../../Assets/Images/loader.gif'

const AllProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://rhubarb-surprise-10351.herokuapp.com/products')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, [])


    // useEffect(() => {
    //     setProducts(products)
    // }, [products])

    return (
        <div>
            <SearchProduct />
            <div style={{ textAlign: 'center' }}>
                {products.length === 0 && <img src={loader} alt="loader" />}
            </div>
            <Row justify="center">
                {products && products.map(product => <Product product={product} key={product._id} />)}
            </Row>

        </div>
    );
};

export default AllProduct;