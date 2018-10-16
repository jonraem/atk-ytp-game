import React, { Component } from 'react';
import Input from '../Input/Input';
import './AnswerInputs.css';

export class AnswerInputs extends Component {
  render() {
    return (
      <div className="AnswerInputs">
        <Input label="Planning" type="planning" updateScore={this.props.updateScore} />
        <Input label="Sprint 1" type="sprint1" updateScore={this.props.updateScore} />
        <Input label="Sprint 2" type="sprint2" updateScore={this.props.updateScore} />
        <Input label="Sprint 3" type="sprint3" updateScore={this.props.updateScore} />
        <Input label="Release" type="release" updateScore={this.props.updateScore} />
      </div>
    );
  }
}

export default AnswerInputs;
