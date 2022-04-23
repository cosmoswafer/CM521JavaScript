import React from 'react';

class Link extends React.Component {
    render() {
        return (
            <a target="_blank" href={this.props.url}>
                {this.props.children}
            </a>
        );
    }
}

export default Link;
