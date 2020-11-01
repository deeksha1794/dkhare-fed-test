import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import { getRandomUser } from './action';

class App extends React.Component {
	constructor(props) {
		super(props);
		props.getRandomUsers(5);
	}

	render() {
		const { randomUserState, getRandomUsers } = this.props;
		return (
			<Container fluid>
				<Header />
				<Main
					randomUserData={randomUserState?.randomUser?.results}
					onClickHandler={() => getRandomUsers(randomUserState?.count + 5)}
				/>
				<Footer />
			</Container>
		);
	}
}
function mapDispatchToProps(state) {
	return {
		randomUserState: state.randomUserState
	};
}

export default connect(mapDispatchToProps, {
	getRandomUsers: getRandomUser.request
})(App);
