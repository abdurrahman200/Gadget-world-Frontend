import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar';
import '../Style/Style.css'

const CheckOut = () => {
    let { id } = useParams();
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '2rem' }}>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
                        <Card title="Please CheckOut Your Product">
                            <table>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td>Peter</td>
                                    <td>{id}</td>
                                    <td>85</td>

                                </tr>
                                <tr>
                                    <td> Totals </td>
                                    <td>  </td>
                                    <td>114 </td>
                                </tr>

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