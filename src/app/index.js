import React from 'react';
import { render } from 'react-dom';

import '../../assets/main.scss'


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>It is working, very nice</h1>
            </div>
        )
    }
}


render(<App/>, window.document.getElementById('app'));