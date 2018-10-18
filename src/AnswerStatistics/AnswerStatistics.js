import React, { Component } from 'react';
import { capitalize } from 'lodash';
import Stat from '../Stat/Stat';
import './AnswerStatistics.scss';

export class AnswerStatistics extends Component {

  mapScore = () => {
    const { score } = this.props;
    const elements = [];
    let index = 0;
    for (let element in score) {
      const value = element === 'bug' || element === 'money' ? (100 - score[element]) : score[element];
      elements.push(<Stat key={index} label={capitalize(element)} value={value} />)
      index++;
    }
    return elements;
  };

  render() {
    const scoreBreakdown = this.mapScore();
    const { customer, feature, bug, money } = this.props.score;
    const totalScore = (customer + feature) - Math.abs(100 - bug) - Math.abs(100 - money);
    
    return (
      <div className="AnswerStatistics">
        <div className="AnswerStatistics__total">
          Total score: {totalScore}
        </div>
        <div className="AnswerStatistics__breakdown">
          {scoreBreakdown}
        </div>
      </div>
    );
  }
}

export default AnswerStatistics;
