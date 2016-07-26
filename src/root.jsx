import React from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            names: ['Foo', 'Bar', 'Baz']
        };
        this._addToList = this._addToList.bind(this);
        this._removeFromList = this._removeFromList.bind(this);
    }

    _addToList() {
        const { names } = this.state;
        names.push(Math.random());
        this.setState({ names });
    }

    _removeFromList() {
        const { names } = this.state;
        names.pop();
        this.setState({ names });
    }

    render() {
        const { names } = this.state;
        return (
            <div>
                <button onClick={this._addToList}>Add Random Number</button>
                <button onClick={this._removeFromList}>Remove From List</button>
                <ol>
                    {
                        names.map((name, index) => (
                            <li key={index}>{ name }</li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}
