import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import '../Style/Style.css'

const CheckOut = () => {

    let { id } = useParams();

    const [product, setProduct] = useState({});
    const { image, productName, price } = product;
    useEffect(() => {
        fetch(`https://rhubarb-surprise-10351.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])


    return (
        <>
            <Navbar />
            <div style={{ marginTop: '2rem' }}>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
                        <Card title="Please CheckOut Your Product">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Images</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={image} alt="images" width="60" /></td>
                                        <td>{productName}</td>
                                        <td>1</td>
                                        <td>${price} </td>
                                    </tr>

                                    <tr style={{ borderTop: '2px solid #ccc' }}>
                                        <td><strong>Total</strong></td>
                                        <td></td>
                                        <td></td>
                                        <td>${price} </td>
                                    </tr>
                                </tbody>
                            </table>

                            <Link to={"/Order/" + productName}> <Button type="primary" style={{ float: 'right' }}> CheckOut </Button> </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CheckOut;