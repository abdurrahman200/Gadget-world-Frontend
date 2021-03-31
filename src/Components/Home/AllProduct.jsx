import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import FakeDate from '../../FakeData/FakeData.json';
import Product from './Product';
import SearchProduct from './SearchProduct';
import loader from '../../Assets/Images/loader.gif'

const AllProduct = () => {
    console.log(FakeDate);

    const [products, setProducts] = useState(FakeDate)

    useEffect(() => {
        setProducts(products)
    }, [products])

    return (
        <div>
            <SearchProduct />
            {products.length === 0 && <img src={loader.gif} alt="" />}
            <Row justify="center">
                {products && products.map(product => <Product product={product} key={product.id} />)}
            </Row>

        </div>
    );
};

export default AllProduct;