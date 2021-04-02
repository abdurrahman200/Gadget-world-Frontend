import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, UserOutlined, NumberOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const AddProduct = () => {
    const [imageURL, setIMageURL] = useState(null);

    const imageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '729572a3b5356d1497d6e88f1e9eafde');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) { setIMageURL(response.data.data.display_url) })
            .catch(function (error) { console.log(error) })
    }

    const onFinish = (data) => {
        if (imageURL !== null) {
            const productData = data;
            productData.image = imageURL;
            fetch('https://rhubarb-surprise-10351.herokuapp.com/addProduct', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productData)
            }).then(data => { if (data.ok == true) { <Redirect to='/' /> } })
        }
        else { alert('Image is uploading , Please wait') }
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

                            <div>
                                <input type="file" name="image" onChange={imageUpload} />
                            </div>

                            <Form.Item >
                                <Button htmlType="submit" type="primary" > Submit </Button>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AddProduct;