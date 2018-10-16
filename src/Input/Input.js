import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
  state = {
    option: undefined
  };

  handleInputChange(e) {
    this.props.updateScore(e.target.value, this.props.type);
    this.setState({ option: e.target.value })
  }

  render() {
    const { label } = this.props;

    return (
      <div className="Input">
        <span className="Input__label">{label}</span>
        <input
          className="Input__input"
          value={this.state.option}
          onChange={e => this.handleInputChange(e)}
        />
      </div>
    );
  }
}

export default Input;
