import React from "react";
import {Container, Row, Col} from "reactstrap";

export default function Footer() {
    return (
        <Container className={"footer"}>
            <Row>
                <Col xs={12}>
                    <h5>Developed by: Deeksha khare</h5>
                </Col>
            </Row>
        </Container>);
}

