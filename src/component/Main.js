import React from 'react';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const CardView = props => {
	return props?.randomUserData?.map(ele => (
		<div key={ele.login.uuid} className="card-view">
			<Card>
				<CardImg top src={ele?.picture?.large} alt="Card image cap" />
				<CardBody>
					<CardTitle>{`${ele?.name?.title} ${ele?.name?.first} ${ele?.name?.last}`}</CardTitle>
					<CardText>Gender: {` ${ele?.gender}`}</CardText>
					<CardText>User Name: {` ${ele?.login?.username}`}</CardText>
					<CardText>Email: {` ${ele?.email}`}</CardText>
				</CardBody>
			</Card>
		</div>
	));
};
export default class Main extends React.PureComponent {
	render() {
		const { randomUserData, onClickHandler } = this.props;
		return (
			<div className="main">
				<Row className="random-user">
					{randomUserData ? <CardView randomUserData={randomUserData} /> : <h5>Oops! no data to return</h5>}
				</Row>
				<Row className="load-botton">
					<Button color="primary" onClick={onClickHandler}>
						Load more User
					</Button>
				</Row>
			</div>
		);
	}
}
