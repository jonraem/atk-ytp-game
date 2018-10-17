import React, { Component } from 'react';
import './AnswerInput.css';

const RadioButton = ({ id, onChange, checked }) => (
  <div className={`AnswerInput__radio-button-${id}`}>
    <span className={`AnswerInput__radio-label-${id}`}>{id}</span>
    <input
      type="radio"
      id={id}
      className={`AnswerInput__radio-input-${id}`}
      value={id}
      onChange={e => onChange(e)}
      checked={checked}
    />
  </div>
);

export class AnswerInput extends Component {
  state = {
    option: undefined
  };

  handleInputChange = (e) => {
    this.setState({ option: e.target.value })
    this.props.updateScore(e.target.value, this.props.type);
  };

  render() {
    return (
      <div className="AnswerInput">
        <form className="AnswerInput__radiogroup">
          <RadioButton
            id="a"
            onChange={this.handleInputChange}
            checked={this.state.option === 'a'}
          />
          <RadioButton
            id="b"
            onChange={this.handleInputChange}
            checked={this.state.option === 'b'}
          />
          <RadioButton
            id="c"
            onChange={this.handleInputChange}
            checked={this.state.option === 'c'}
          />
          <RadioButton
            id="d"
            onChange={this.handleInputChange}
            checked={this.state.option === 'd'}
          />
        </form>
      </div>
    );
  }
}

export default AnswerInput;
