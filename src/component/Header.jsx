import React from "react";
import {Container, Row, Col} from "reactstrap";

export default function Header() {
    return (
        <Container className={"header"}>
            <Row>
                <Col xs={12}>
                    <h2>RandomUser.me</h2>
                </Col>
            </Row>
        </Container>);
}

