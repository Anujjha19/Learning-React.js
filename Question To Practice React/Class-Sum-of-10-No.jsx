import React, { Component } from 'react';

class SumOfTenNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }

  componentDidMount() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    this.setState({ sum });
  }

  render() {
    return (
      <div>
        <h1>Sum of first 10 numbers:</h1>
        <p>{this.state.sum}</p>
      </div>
    );
  }
}

export default SumOfTenNumbers;