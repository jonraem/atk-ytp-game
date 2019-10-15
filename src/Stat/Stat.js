import React, { Component } from 'react';
import './Stat.scss';

class Stat extends Component {

  state = {
    delta: 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.setState({ delta: this.props.value > prevProps.value ? 1 : -1 });
    }
  }

  render () {
    const { label, value, isNegative } = this.props;
    const { delta } = this.state;

    return (
      <div className="Stat">
        <div
          className={`Stat__delta Stat__delta--up ${delta > 0 && 'visible'}`}
          style={{ borderColor: isNegative && 'transparent transparent red transparent' }} 
        />
        <div className="Stat__label">{label}</div>
        <div className="Stat__value" style={{ color: value < 0 && 'red' }}>{value}</div>
        <div
          className={`Stat__delta Stat__delta--down ${delta < 0 && 'visible'}`}
          style={{ borderColor: isNegative && 'green transparent transparent transparent' }} 
        />
      </div>
    );
  }
}

export default Stat;
