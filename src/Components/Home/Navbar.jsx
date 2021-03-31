import React from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import Layout, { Header } from 'antd/lib/layout/layout';
import { useAuth } from '../Auth/useAuth';

const Navbar = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            })
    }
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
                    <Menu.Item> <Link to="/Home"> <HomeOutlined /> Gadget World </Link> </Menu.Item>
                    <Menu.Item> <Link to="/Order"> Order </Link> </Menu.Item>
                    <Menu.Item> <Link to="/Deals"> Deals </Link> </Menu.Item>
                    <Menu.Item> <Link to="/Contact"> Contact </Link> </Menu.Item>
                    <Menu.Item> <Link to="/AdminPanel"> Admin Panel </Link> </Menu.Item>
                    {auth.user ?
                        <Menu.Item>  <Link to="/SignIn">  <Button type="primary" onClick={handleSignOut}> <LogoutOutlined /> {auth.user.name} </Button> </Link>  </Menu.Item>
                        :
                        <Menu.Item>  <Link to="/SignIn">  <Button type="primary" > Sign In </Button> </Link>  </Menu.Item>
                    }

                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;