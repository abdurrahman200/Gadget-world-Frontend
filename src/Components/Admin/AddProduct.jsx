import axios from 'axios';
import React, { useState } from 'react';

import { Form, Input, Button, Row, Col, Card, Upload } from 'antd';
import { ShoppingCartOutlined, UserOutlined, UploadOutlined, NumberOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';


const AddProduct = () => {
    const [imageLink, setImageLink] = useState(null)
    // handle image upload
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', 'beade2d46fa49e36d76a9a5ff056868a')
        imageData.append('images', event.target.files)

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageLink(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Product Submit
    const onFinish = data => {
        if (imageLink !== null) {
            const productData = data;
            productData.image = imageLink;
            fetch('https://rhubarb-surprise-10351.herokuapp.com/addProduct', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productData)
            }).then(data => {
                if (data.ok == true) {
                    <Redirect to='/addProduct' />
                }
            })
        }
        else {
            alert('Image is uploading , Please wait')
        }
    };

    return (
        <>
            <Row justify="center">
                <Col xs={22} sm={22} md={12} lg={22} xl={22} xxl={22}>

                    <Card title="Add Product">

                        <Form name="horizontal_login" layout="inline" onFinish={onFinish}>

                            <Form.Item name="productName" rules={[{ required: true, message: 'Please input your Product Name!' }]} >
                                <Input prefix={<ShoppingCartOutlined />} placeholder="Product Name" />
                            </Form.Item>

                            <Form.Item name="authorName" rules={[{ required: true, message: 'Please input your authorName!' }]} >
                                <Input prefix={<UserOutlined />} placeholder="Author Name" />
                            </Form.Item>

                            <Form.Item name="price" rules={[{ required: true, message: 'Please input your Price!' }]} >
                                <Input prefix={<NumberOutlined />} placeholder="Price" />
                            </Form.Item>

                            <Upload name="images"  >
                                <Button name="images"  type="file" icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>

                            <Form.Item >
                                <Button onClick={handleImageUpload}  htmlType="submit" type="primary" > Submit </Button>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AddProduct;