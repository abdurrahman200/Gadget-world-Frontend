import React from 'react';
import { Form, Input, Button, Row, Col, Card, Upload } from 'antd';
import { ShoppingCartOutlined, UserOutlined, UploadOutlined , NumberOutlined } from '@ant-design/icons';

const AddProduct = () => {

    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    return (
        <div>
            <Row justify="center">
                <Col xs={22} sm={22} md={12} lg={22} xl={22} xxl={22}>
                    <Card title="Add Product">
                        <Form name="horizontal_login" layout="inline" onFinish={onFinish}>

                            <Form.Item name="productName" rules={[{ required: true, message: 'Please input your Product Name!' }]} >
                                <Input prefix={ <ShoppingCartOutlined /> } placeholder="Product Name" />
                            </Form.Item>

                            <Form.Item name="authorName" rules={[{ required: true, message: 'Please input your authorName!' }]} >
                                <Input prefix={<UserOutlined />}  placeholder="Author Name" />
                            </Form.Item>

                            <Form.Item name="price" rules={[{ required: true, message: 'Please input your Price!' }]} >
                                <Input prefix={<NumberOutlined />} placeholder="Price" />
                            </Form.Item>

                            <Form.Item name="upload" valuePropName="fileList" rules={[{ required: true, message: 'Please input upload File!' }]}>
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item >
                                <Button htmlType="submit" type="primary" > Submit </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AddProduct;