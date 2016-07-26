import React from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            text: 'This is some text'
        };
    }

    update(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <h1>
                <div>{ this.state.text }</div>
                <input type="text" onChange={(event) => this.update(event)} />
            </h1>
        )
    }
}
