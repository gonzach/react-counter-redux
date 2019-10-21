import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  render() {
    return (
      <div className="App">

          <button onClick={() => 
          { this.setState({number: this.state.number + 1})}}>
            +
          </button >
  
          <button onClick={() => 
          { this.setState({number: this.state.number - 1})}}>
            -
          </button>
          <p>number: {this.state.number}</p>
          
      </div>
    );
  }
}

export default Button;
