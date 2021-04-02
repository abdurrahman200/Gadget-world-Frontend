import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { AppstoreOutlined, EditOutlined , DashboardOutlined } from '@ant-design/icons';
import ManagedProduct from './ManagedProduct';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

const { Content, Sider } = Layout;

const { Title } = Typography;

const AdminPanel = () => {
    return (
        <>
            <Layout>
                <Sider style={{ color: '#fff' }}>
                    <Title level={4} style={{ color: '#fff', textAlign: 'center', margin: '2rem 0' }}> <Link to="/"> Gadget World  </Link> </Title>
                    <Menu theme="dark" mode="inline" defaultOpenKeys={['1']}>
                        <Menu.Item key="1"> <Link to="/AdminPanel"> <AppstoreOutlined /> Managed Product </Link> </Menu.Item>
                        <Menu.Item key="3"> <Link to="/EditProduct"> <EditOutlined /> Edit Product </Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '2rem 1rem' }}>
                    <Content >
                        <div>
                            <Title level={4}> <DashboardOutlined /> DashBoard </Title>
                            <hr style={{ backgroundColor: '#ccc', width: '100%', marginBottom: '1rem' }} />
                        </div>

                        <div>
                            <AddProduct />
                            <ManagedProduct />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};

export default AdminPanel;