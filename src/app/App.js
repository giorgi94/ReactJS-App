import React, { Component } from 'react';

const Header = (props) => {

    return (<div>This is my Header. {props.message} </div>)
}



class App extends Component {

    constructor() {
        super();

        this.state = {
            message: "This is my state"
        }
    }

    changeMessage() {
        this.setState({
            message: "Hey this is very nice tool"
        })
    }


    render() {
        return (
            <div>
                <Header message={this.state.message}/>
                <h1 onClick={this.changeMessage.bind(this)}>It is working, very nice</h1>
            </div>
        )
    }
}

export default App;