import React, { Component } from 'react';

class SquareCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      square: 0,
    };
  }

  handleNumberChange = (event) => {
    const { value } = event.target;
    const square = Number(value) * Number(value);
    this.setState({
      number: value,
      square,
    });
  };

  render() {
    const { number, square } = this.state;
    return (
      <div>
        <input type="number" onChange={this.handleNumberChange} value={number} />
        <p>Square: {square}</p>
      </div>
    );
  }
}

export default SquareCalculator;