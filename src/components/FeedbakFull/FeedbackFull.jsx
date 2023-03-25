import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Buttons } from 'components/Buttons/Buttons';

import css from 'components/FeedbakFull/FeedbackFull.module.css';

class FeedbackFull extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  totalCountFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr, 0);

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.totalCountFeedback());
  };

  render() {
    return (
      <div className={css.div_feedback_full}>
        <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}>
            Please leave feedback from visiting our cafe
          </h2>
        </div>

        <Buttons
          fullBtn={['good', 'neutral', 'bad']}
          onClick={this.handleClick}
        />

        <div className={css.feedback_title}>
          <h2 className={css.feedback_h2}> Statictics</h2>
        </div>

        {this.totalCountFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalCountFeedback()}
            positiv={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
export { FeedbackFull };

FeedbackFull.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
