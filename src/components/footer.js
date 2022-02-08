import React, {useState, useEffect} from 'react';
import {Flex, Row, Col, Text} from '../components/common/base';
import { bgStyler } from '../styles';


export const Footer = ({darkMode}) => {
    return (
        <Col align="center" height="300px" bg={bgStyler(darkMode)}>
            <Row>
                <Col>
                    <Text></Text>
                </Col>
                <Col>
                    <Text>CONTACT</Text>
                </Col>  
            </Row>
        </Col>
    )
};

export default Footer;