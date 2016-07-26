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
                <MyInputAndText text={this.state.text} update={this.update} />
            </div>
        )
    }
}

class MyInputAndText extends React.Component {
    render() {
        const { text, update } = this.props;
        return (
            <div>
                <h1>{ text }</h1>
                <input type="text" onChange={update} />
            </div>
        )
    }
}
