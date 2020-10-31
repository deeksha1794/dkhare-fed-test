import React from "react";
import {
    Container,
    Row, Col,
    Card, CardImg,
    CardText, CardBody,
    CardTitle} from "reactstrap";

const CardView = (props) => {
    return props?.randomUserData?.map((ele, index) => (
        <Col xs={3} key={index}>
            <Card>
                <CardImg top src={ele?.picture?.large}
                    alt="Card image cap" />
                <CardBody>
                    <CardTitle>
                        {
                            ele?.name?.title + " " + ele?.name?.first + " " + ele?.name?.last
                        }
                    </CardTitle>
                    <CardText>Gender: {" " + ele?.gender}</CardText>
                    <CardText>User Name: {" " + ele?.login?.username}</CardText>
                    <CardText>Email: {" " + ele?.email}</CardText>
                </CardBody>
            </Card>
        </Col>
    ));
};
export default class Main extends React.PureComponent {
    render() {
        return (
            <Container className={"main"}>
                <Row>
                    <Col xs={12}>
                        {this.props?.randomUserData ?
                            <CardView randomUserData=
                                {this.props?.randomUserData} /> :
                            <h5>Oops! no data to return</h5>}
                    </Col>
                </Row>
            </Container>);
    }
}

