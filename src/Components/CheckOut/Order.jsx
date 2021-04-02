import { Card, Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../Auth/useAuth';
import Navbar from '../Home/Navbar';

const Order = () => {
    const auth = useAuth()
    let { id } = useParams()

    return (
        <>
            <Navbar />
            <div style={{ marginTop: '2rem' }}>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
                        <Card title=" Your Order List">
                            <table>
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <th> Name </th>
                                        <th> Mail</th>
                                        <th> Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>{id}</td>
                                        <td>{auth.user.name}</td>
                                        <td>{auth.user.email}</td>
                                        <td>{new Date().toDateString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Order;