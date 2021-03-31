import { Button, Card, Col, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
const { Title } = Typography;

const Product = ({ product }) => {
    const { id, name, title, price, images } = product
    return (
        <>
            <Col xs={23} sm={12} md={8} lg={8} xl={6} xxl={6}>
                <Card hoverable cover={<img alt="images" src={images} />} >
                    <Meta title={name} description={title} />
                    <Title level={3}> Price: ${price}</Title>
                    <Link to={"/CheckOut/" + id}>  <Button type="primary" block> Boy Now </Button> </Link>
                </Card>
            </Col>
        </>
    );
};

export default Product;