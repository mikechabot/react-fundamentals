import React from 'react';

export default class Root extends React.Component {
    render() {
        var color = this.props.color;
        return (
            <h1>
                The color is { color }
            </h1>
        )
    }
}
