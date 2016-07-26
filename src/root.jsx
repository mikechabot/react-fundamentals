import React from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            text: 'This is some text'
        };
        this.update = this.update.bind(this);
    }

    update(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.text }</h1>
                <input type="text" onChange={this.update} />
            </div>
        )
    }
}
