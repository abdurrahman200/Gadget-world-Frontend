import { Button, Card, Col, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const Product = ({ product }) => {
    const { _id, name, title, price, images } = product
    return (
        <>
            <Col xs={23} sm={12} md={8} lg={6} xl={4} xxl={4}>
                <Card hoverable cover={<img alt="images" src={images} />} >
                    <Meta title={name} description={title} />
                    <Title level={3}> Price: ${price}</Title>
                    <Link to={"/CheckOut/" + _id}>  <Button type="primary" block> <ShoppingCartOutlined /> Boy Now </Button> </Link>
                </Card>
            </Col>
        </>
    );
};

export default Product;