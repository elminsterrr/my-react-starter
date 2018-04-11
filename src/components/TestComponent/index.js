import axios from 'axios';
import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/')
      .then(response => {
        console.log(response.data);
        this.setState({ result: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTestButton() {
    axios
      .post('http://localhost:3001/', {
        test: 'Testing post...',
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleTestButton()}>Test</button>
      </div>
    );
  }
}

export default TestComponent;
