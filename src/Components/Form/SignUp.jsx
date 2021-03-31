import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined , MailOutlined } from '@ant-design/icons';
import Navbar from '../Home/Navbar';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '2rem' }}>
                <Row justify="center">
                    <Col xs={24} sm={18} md={12} lg={10} xl={8} xxl={6}>
                        <Card title="Create A New Account">

                            <Form name="normal_login" initialValues={{ remember: true, }} onFinish={onFinish}>

                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!', },]}>
                                    <Input prefix={<UserOutlined />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!', },]}>
                                    <Input prefix={<MailOutlined />} placeholder="Email" />
                                </Form.Item>

                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block  shape="round"> Create Account</Button>
                                    You Have a Account ? <Link to="/SignIn" > Sign in</Link>
                                </Form.Item>
                            </Form>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default SignUp;