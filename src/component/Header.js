import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Header() {
	return (
		<Row className="header">
			<Col xs={12}>
				<h2>RandomUser.me</h2>
			</Col>
		</Row>
	);
}
