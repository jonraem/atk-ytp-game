import React, { Component } from 'react';
import AnswerInput from './AnswerInput/AnswerInput';
import scoreScheet from '../scoreSheet.json';
import './AnswerInputs.css';

const sprints = [
  {name: 'planning'},
  {name: 'sprint1'},
  {name: 'sprint2'},
  {name: 'sprint3'},
  {name: 'release'},
]

export class AnswerInputs extends Component {

  render() {
    const { updateScore } = this.props;
    const inputs = sprints.map((sprint, i) => (<AnswerInput key={i} sprintName={sprint.name} updateScore={updateScore} options={scoreScheet[sprint.name]}/>));
    return (
      <div className="AnswerInputs">
        {inputs}
      </div>
    );
  }
}

export default AnswerInputs;
