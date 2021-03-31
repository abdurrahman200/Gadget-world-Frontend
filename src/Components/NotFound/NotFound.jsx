import React from 'react';
import { Row, Typography } from 'antd';

const NotFound = () => {
    const { Title } = Typography;
    return (
        <Row justify="center">
            <Title> 404! Not Found</Title>
        </Row>
    );
};

export default NotFound;