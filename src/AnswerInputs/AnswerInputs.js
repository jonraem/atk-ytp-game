import React, { Component } from 'react';
import AnswerInput from './AnswerInput/AnswerInput';
import './AnswerInputs.css';

export class AnswerInputs extends Component {
  render() {
    const { updateScore } = this.props;
    return (
      <div className="AnswerInputs">
        <AnswerInput
          sprintName="planning"
          updateScore={updateScore}
        />
        <AnswerInput
          sprintName="sprint1"
          updateScore={updateScore}
        />
        <AnswerInput
          sprintName="sprint2"
          updateScore={updateScore}
        />
        <AnswerInput
          sprintName="sprint3"
          updateScore={updateScore}
        />
        <AnswerInput
          sprintName="release"
          updateScore={updateScore}
        />
      </div>
    );
  }
}

export default AnswerInputs;
