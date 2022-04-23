import React from 'react';
import './BusinessCard.css';

class BusinessCard extends React.Component {
    render() {
        return (
            <div className="bussiness-card">
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <h3>{this.props.department}</h3>
                <h3>+853 {this.props.phone}</h3>
            </div>
        );
    }
}

export default BusinessCard;
