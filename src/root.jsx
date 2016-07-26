import React from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            names: ['Foo', 'Bar', 'Baz']
        };
    }

    render() {
        const { names } = this.state;
        return (
            <ol>
                {
                    names.map((name, index) => (
                        <li key={index}>{ name }</li>
                    ))
                }
            </ol>
        )
    }
}
