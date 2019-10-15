import React, { Component } from 'react';
import './AnswerInput.scss';

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

// const CriticalHitButton = ({ critModifier, onClick }) => (
//   <div 
//     className={`AnswerInput__critical-hit-button ${critModifier ? critModifier : ''}`}
//     onClick={onClick}
//   />
// );

export class AnswerInput extends Component {
  state = {
    answer: undefined,
    critModifier: undefined
  };

  getCritModifier = () => {
    const critModifier = Math.ceil(Math.random() * 6);
    
    if (critModifier === 1) {
      this.setState({ critModifier: 'failure' });
    }
    if (critModifier === 6) {
      this.setState({ critModifier: 'success' });
    }
    if (critModifier > 1 && critModifier < 6) {
      this.setState({ critModifier: undefined })
    }
    
  };

  handleInputChange = (e) => {
    const { sprintName, options, updateScore } = this.props;
    const answer = e.target.value;

    this.setState({ answer });
    this.getCritModifier();

    const score = options[answer];
    updateScore(score, sprintName);
  };

  render() {
    const { answer } = this.state;
    const { sprintName } = this.props;
    return (
      <div className="AnswerInput">
        <form className="AnswerInput__radiogroup">
          <RadioButton
            id="a"
            onChange={this.handleInputChange}
            checked={answer === 'a'}
            // TODO: save to local state the selected option
          />
          <RadioButton
            id="b"
            onChange={this.handleInputChange}
            checked={answer === 'b'}
          />
          <RadioButton
            id="c"
            onChange={this.handleInputChange}
            checked={answer === 'c'}
          />
          <RadioButton
            id="d"
            onChange={this.handleInputChange}
            checked={answer === 'd'}
          />
        </form>
        <div className="AnswerInput__label">{sprintName.toUpperCase()}</div>
      </div>
    );
  }
}

export default AnswerInput;
