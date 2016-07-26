import React from 'react';

export default class Root extends React.Component {
    render() {
        const { color, alert } = this.props;
        return (
            <h1>
                The color is&nbsp;
                <span style={{ color }} onClick={alert}>
                    { color }
                </span>
            </h1>
        )
    }
}
