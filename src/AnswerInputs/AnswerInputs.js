import React, { Component } from 'react';
import AnswerInput from './AnswerInput/AnswerInput';
import './AnswerInputs.css';

export class AnswerInputs extends Component {
  render() {
    return (
      <div className="AnswerInputs">
        <AnswerInput
          type="planning"
          updateScore={this.props.updateScore}
        />
        <AnswerInput
          type="sprint1"
          updateScore={this.props.updateScore}
        />
        <AnswerInput
          type="sprint2"
          updateScore={this.props.updateScore}
        />
        <AnswerInput
          type="sprint3"
          updateScore={this.props.updateScore}
        />
        <AnswerInput
          type="release"
          updateScore={this.props.updateScore}
        />
      </div>
    );
  }
}

export default AnswerInputs;
