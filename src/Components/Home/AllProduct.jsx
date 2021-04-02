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
            {products.length === 0 &&   <img src={loader} width="200" alt="loader"/> }
            <Row justify="center">
                {products && products.map(product => <Product product={product} key={product.id} />)}
            </Row>

        </div>
    );
};

export default AllProduct;