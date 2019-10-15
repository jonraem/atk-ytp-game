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
      let value = element === 'bug' ? (100 - score[element]) : score[element];
      let isNegative = element === 'bug';
      if (element === 'money') {
        value = `${value} K`;
      }
      if (element === 'feature' || element === 'bug') {
        value = ~~value;
      }
      elements.push(<Stat key={index} label={capitalize(element)} value={value} isNegative={isNegative} />)
      index++;
    }
    return elements;
  };

  render() {
    const scoreBreakdown = this.mapScore();
    const { customer, feature, bug, money } = this.props.score;
    const totalScore = (customer + feature) - (100 - bug) - (100 - money);
    
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
