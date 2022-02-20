import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0,
    };

    handleChange = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        const { children } = this.props;
        return children(count, this.handleChange);
    }
}
