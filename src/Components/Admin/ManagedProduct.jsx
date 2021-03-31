import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import pd from '../../Assets/Product/1.jpg'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ManagedProduct = () => {
    return (
        <>
            <div>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={22} xl={22} xxl={22}>
                        <Card title="Product Details">
                            <table>
                                <tr>
                                    <th>Images</th>
                                    <th>Product Name</th>
                                    <th>Brand Name</th>
                                    <th>Product Price</th>
                                    <th>Action</th>
                                </tr>

                                <tr>

                                    <td><img src={pd} alt="" width="50" /></td>
                                    <td>Peter</td>
                                    <td>Peter</td>
                                    <td>$421</td>
                                    <td>
                                        <Link to="#"> <Button type="primary"> <EditOutlined /> </Button> </Link>
                                        <Link to="#"> <Button style={{ backgroundColor: 'red' }}>  <DeleteOutlined /> </Button> </Link>
                                    </td>

                                </tr>

                                <tr>
                                    <td><img src={pd} alt="" width="50" /></td>
                                    <td>Peter</td>
                                    <td>Peter</td>
                                    <td>$251</td>
                                    <td>
                                        <Link to="#"> <Button type="primary"> <EditOutlined /> </Button> </Link>
                                        <Link to="#"> <Button style={{ backgroundColor: 'red' }}>  <DeleteOutlined /> </Button> </Link>
                                    </td>

                                </tr>


                            </table>

                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default ManagedProduct;