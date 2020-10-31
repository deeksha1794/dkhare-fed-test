import React from "react";
import {Container} from "reactstrap";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import {connect} from "react-redux";
import {getRandomUser} from "./action";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.getRandomUser();
    }

    render() {
        return (<Container fluid>
            <Header />
            <Main randomUserData=
                {this.props?.randomUserState?.randomUser?.results} />
            <Footer />
        </Container>);
    }
}
function mapDispatchToProps(state) {
    return {
        randomUserState: state.randomUserState,
    };
}

export default connect(mapDispatchToProps, {
    getRandomUser: getRandomUser.request,
})(App);
