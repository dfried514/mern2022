import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
        
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({ age: state.age + 1 }));
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <button onClick={this.handleClick}>Increment Age</button>
            </div>
        );
    }
}
export default PersonCard;
