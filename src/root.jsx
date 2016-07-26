import React from 'react';
import ReactDOM from 'react-dom';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }

    update(event) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        })
    }

    render() {
        return (
            <div>

                <RangeSlider ref="red" update={this.update} />
                <div>{ this.state.red }</div>

                <RangeSlider ref="green" update={this.update} />
                <div>{ this.state.green }</div>

                <RangeSlider ref="blue" update={this.update} />
                <div>{ this.state.blue }</div>

            </div>
        )
    }
}

class RangeSlider extends React.Component {
    render() {
        const { update } = this.props;
        return (
            <input type="range" onChange={update} min="0" max="255" />
        )
    }
}
