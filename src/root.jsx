import React from 'react';

export default class Root extends React.Component {
    render() {
        const { color } = this.props;
        return (
            <h1>
                The color is&nbsp;
                <span style={{ color }}>
                    { color }
                </span>
            </h1>
        )
    }
}
