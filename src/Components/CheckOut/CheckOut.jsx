import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar';
import '../Style/Style.css'

const CheckOut = () => {

    let { id } = useParams();
    const [product, setProduct] = useState({});

    const { name, price } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
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
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td>1</td>
                                        <td>{price} </td>
                                    </tr>

                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td>{price} </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <Button type="primary" style={{ float: 'right' }}> CheckOut </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CheckOut;