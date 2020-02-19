import React from 'react';

import { Col } from 'react-bootstrap';

const Header = ({header}) => (
    <Col xs={12} className="my-4">
        <h1 className="text-center">{header}</h1>
    </Col>
);

export default Header;