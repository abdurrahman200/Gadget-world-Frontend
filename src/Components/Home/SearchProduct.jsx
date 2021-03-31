import { Card, Col, Input, Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';

const { Search } = Input;

const SearchProduct = () => {
    return (
        <Layout style={{padding: '2rem 0'}}>
            <Row justify="center">
                <Col xs={22} sm={20} md={18} lg={16} xl={14} xxl={12}>
                    <Card>
                        <Search placeholder="Search Your Product" allowClear enterButton="Search" size="large" />
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default SearchProduct;