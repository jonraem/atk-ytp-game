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

const CriticalHitButton = ({ criticalHit, onClick }) => (
  <div 
    style={ criticalHit ? { backgroundColor: 'maroon' } : null}
    className="AnswerInput__critical-hit-button"
    onClick={onClick}
  />
);

export class AnswerInput extends Component {
  state = {
    option: undefined,
    criticalHit: false
  };

  handleCriticalHit = () => {
    // ???
    console.log('Critical hit!');
    this.setState({ criticalHit: true });
  };

  handleInputChange = (e) => {
    this.setState({ option: e.target.value })
    this.props.updateScore(e.target.value, this.props.type);
  };

  render() {
    return (
      <div className="AnswerInput">
        <CriticalHitButton criticalHit={this.state.criticalHit} onClick={this.handleCriticalHit} />
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
        <div className="AnswerInput__label">{this.props.type.toUpperCase()}</div>
      </div>
    );
  }
}

export default AnswerInput;
