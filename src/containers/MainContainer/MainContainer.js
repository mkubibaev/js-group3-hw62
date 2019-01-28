import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";

class MainContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <h1>Home page</h1>
            </Fragment>
        );
    }
}

export default MainContainer;