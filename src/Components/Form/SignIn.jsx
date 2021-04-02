import React from 'react';

import { useAuth } from '../Auth/useAuth';

import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { LockOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Home/Navbar';


const SignIn = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const GoogleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                // console.log(res);
                history.replace(from);
            })
    }


    return (
        <>
            <Navbar />
            <div style={{ marginTop: '2rem' }}>
                <Row justify="center">
                    <Col xs={24} sm={18} md={12} lg={10} xl={8} xxl={6}>
                        <Card title="Sign In">
                           
                            <Form name="normal_login" initialValues={{ remember: true, }} onFinish={onFinish}>

                                <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!', },]}>
                                    <Input prefix={<MailOutlined />} placeholder="Email" />
                                </Form.Item>

                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />

                                </Form.Item>

                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Link to="" href="">
                                        Forgot password
                                    </Link>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block > Sign In</Button>
                                    Or <Link to="/SignUp" >Create Account now!</Link>
                                </Form.Item>
                                <Button onClick={GoogleSignIn} type="primary" htmlType="submit" shape="round" > <GoogleOutlined /> Sign In With Google</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default SignIn;