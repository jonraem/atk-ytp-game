import React, { Component } from 'react';
import { capitalize } from 'lodash';
import Stat from '../Stat/Stat';
import './AnswerStatistics.css';

export class AnswerStatistics extends Component {
  mapScore = () => {
    const { score } = this.props;
    const elements = [];
    let index = 0;
    for (let element in score) {
      elements.push(<Stat key={index} label={capitalize(element)} value={score[element]} />)
      index++;
    }
    return elements;
  };

  render() {
    const score = this.mapScore();
    return (
      <div className="AnswerStatistics">
        {score}
      </div>
    );
  }
}

export default AnswerStatistics;
