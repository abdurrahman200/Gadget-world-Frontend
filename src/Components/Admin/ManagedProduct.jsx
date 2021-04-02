import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import loader from '../../Assets/Images/loader.gif'
const ManagedProduct = () => {

    const [manageProduct, setManageProduct] = useState([])
    useEffect(() => {
        fetch('https://rhubarb-surprise-10351.herokuapp.com/products')
            .then(Response => Response.json())
            .then(data => setManageProduct(data))
    }, [])


    // Delete Product Item
    const deleteItem = id => {
        fetch(`https://rhubarb-surprise-10351.herokuapp.com/delete/${id}`, {
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
                                    {manageProduct.length === 0 && <img src={loader} alt="loader" />}
                                    {manageProduct.map(pd =>
                                        <tr>
                                            <td>{pd._id}</td>
                                            <td><img src={pd.image} alt="" width="60" /></td>
                                            <td>{pd.productName}</td>
                                            <td>{pd.authorName}</td>
                                            <td>${pd.price}</td>
                                            <td>
                                                <Link to="#"> <Button type="primary"> <EditOutlined /> </Button> </Link>
                                                <Link to="/"> <Button onClick={() => deleteItem(pd._id)} style={{ backgroundColor: 'red' }}>  <DeleteOutlined /> </Button> </Link>
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