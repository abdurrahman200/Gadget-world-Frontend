import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ManagedProduct = () => {

    const [manageProduct, setManageProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(Response => Response.json())
            .then(data => setManageProduct(data))
    }, [])


    // Delete Product Item
    const deleteItem = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
        }).then(res => {
            if (res) {
                console.log(res);
            }
        })
    }

    return (
        <>
            <div>
                <Row justify="center">
                    <Col xs={22} sm={22} md={12} lg={22} xl={22} xxl={22}>
                        <Card title="Product Details">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Images</th>
                                        <th>Product Name</th>
                                        <th>Brand Name</th>
                                        <th>Product Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {manageProduct.map(pd =>
                                        <tr>
                                            <td>{pd.id}</td>
                                            <td><img src={pd.images} alt="" width="60" /></td>
                                            <td>{pd.name}</td>
                                            <td>{pd.title}</td>
                                            <td>${pd.price}</td>
                                            <td>
                                                <Link to="#"> <Button type="primary"> <EditOutlined /> </Button> </Link>
                                                <Link to="#"> <Button onClick={() => deleteItem(pd._id)} style={{ backgroundColor: 'red' }}>  <DeleteOutlined /> </Button> </Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default ManagedProduct;